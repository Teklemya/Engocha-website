import { useState, useReducer } from 'react';
import { CheckCircle, ShoppingCart, User, ArrowLeft, ArrowRight } from 'lucide-react';

const initialOrderState = {
  contactInfo: { name: '', phone: '', email: '', eventType: '' },
  menuSelections: { buffetMenu: false, cocktailAppetizers: false, toGoPackages: false },
  additionalRequirements: { dietaryRestrictions: '', customization: '' },
  estimatedGuests: 0,
  preliminaryQuote: null
};

function orderReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_CONTACT':
      return { ...state, contactInfo: { ...state.contactInfo, ...action.payload } };
    case 'TOGGLE_MENU_SELECTION':
      return { ...state, menuSelections: { ...state.menuSelections, [action.menu]: !state.menuSelections[action.menu] } };
    case 'SET_GUESTS':
      return { ...state, estimatedGuests: action.payload };
    case 'ADD_REQUIREMENTS':
      return { ...state, additionalRequirements: { ...state.additionalRequirements, ...action.payload } };
    case 'GENERATE_QUOTE':
      return { ...state, preliminaryQuote: action.payload };
    default:
      return state;
  }
}

function OrderingProcess() {
  const [orderState, dispatch] = useReducer(orderReducer, initialOrderState);
  const [currentStep, setCurrentStep] = useState(1);

  const calculatePreliminaryQuote = () => {
    const baseRates = { buffetMenu: 10, cocktailAppetizers: 30, toGoPackages: 20 };
    const menuMultipliers = { buffetMenu: 1.2, cocktailAppetizers: 1.5, toGoPackages: 1 };

    let preliminaryQuote = orderState.estimatedGuests * (
      (orderState.menuSelections.buffetMenu ? baseRates.buffetMenu * menuMultipliers.buffetMenu : 0) +
      (orderState.menuSelections.cocktailAppetizers ? baseRates.cocktailAppetizers * menuMultipliers.cocktailAppetizers : 0) +
      (orderState.menuSelections.toGoPackages ? baseRates.toGoPackages * menuMultipliers.toGoPackages : 0)
    );

    const dietAdjustment = orderState.additionalRequirements.dietaryRestrictions ? preliminaryQuote * 0.1 : 0;
    preliminaryQuote += dietAdjustment;

    dispatch({
      type: 'GENERATE_QUOTE',
      payload: {
        baseEstimate: Math.round(preliminaryQuote),
        selectedMenus: Object.keys(orderState.menuSelections).filter(menu => orderState.menuSelections[menu]),
        isNegotiable: true
      }
    });
  };

  const renderStep = () => {
    switch(currentStep) {
      case 1:
        return (
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <User className="mr-3 text-primary-600" /> Contact Information
            </h2>
            <div className="space-y-4">
              <input type="text" placeholder="Full Name" className="w-full p-3 border rounded" value={orderState.contactInfo.name} onChange={(e) => dispatch({ type: 'UPDATE_CONTACT', payload: { name: e.target.value } })} />
              <input type="tel" placeholder="Phone Number" className="w-full p-3 border rounded" value={orderState.contactInfo.phone} onChange={(e) => dispatch({ type: 'UPDATE_CONTACT', payload: { phone: e.target.value } })} />
              <select className="w-full p-3 border rounded" onChange={(e) => dispatch({ type: 'UPDATE_CONTACT', payload: { eventType: e.target.value } })}>
                <option>Select Event Type</option>
                <option>Wedding</option>
                <option>Corporate Event</option>
                <option>Birthday Party</option>
                <option>Other</option>
              </select>
            </div>
            <div className="mt-6 flex justify-between">
              <button onClick={() => setCurrentStep(Math.max(1, currentStep - 1))} className="bg-gray-200 text-gray-800 p-3 rounded flex items-center">
                <ArrowLeft className="mr-2" /> Back
              </button>
              <button onClick={() => setCurrentStep(Math.min(3, currentStep + 1))} className="bg-primary-600 p-3 rounded hover:bg-primary-700 flex items-center">
                Next <ArrowRight className="ml-2" />
              </button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Event Details</h2>
            <div className="space-y-6">
              <div>
                <label className="block mb-2 font-semibold">Estimated Number of Guests</label>
                <input type="number" placeholder="Number of Guests" className="w-full p-3 border rounded" onChange={(e) => dispatch({ type: 'SET_GUESTS', payload: parseInt(e.target.value) })} min="1" />
              </div>
              <div>
                <label className="block mb-2 font-semibold">Select Menu Type(s)</label>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    { key: 'buffetMenu', label: 'Buffet Menu' },
                    { key: 'cocktailAppetizers', label: 'Cocktail' },
                    { key: 'toGoPackages', label: 'To-Go' }
                  ].map(menu => (
                    <label key={menu.key} className={`flex items-center p-4 border rounded cursor-pointer transition ${orderState.menuSelections[menu.key] ? 'bg-primary-100 border-primary-600' : 'bg-white'}`}>
                      <input type="checkbox" className="mr-3" checked={orderState.menuSelections[menu.key]} onChange={() => dispatch({ type: 'TOGGLE_MENU_SELECTION', menu: menu.key })} />
                      {menu.label}
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="block mb-2 font-semibold">Dietary Restrictions or Special Requirements</label>
                <textarea placeholder="Describe any dietary needs, allergies, or special requests" className="w-full p-3 border rounded" onChange={(e) => dispatch({ type: 'ADD_REQUIREMENTS', payload: { dietaryRestrictions: e.target.value } })} />
              </div>
            </div>
            <div className="mt-6 flex justify-between">
              <button onClick={() => setCurrentStep(Math.max(1, currentStep - 1))} className="bg-gray-200 text-gray-800 p-3 rounded flex items-center">
                <ArrowLeft className="mr-2" /> Back
              </button>
              <button onClick={() => {
                calculatePreliminaryQuote();
                setCurrentStep(Math.min(3, currentStep + 1));
              }} className="bg-primary-600 p-3 rounded hover:bg-primary-700 flex items-center" disabled={!orderState.estimatedGuests}>
                <ShoppingCart className="mr-2" /> Generate Preliminary Quote
              </button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <CheckCircle className="mr-3 text-green-600" /> Preliminary Consultation
            </h2>
            {orderState.preliminaryQuote && (
              <div className="bg-amber-100 p-6 rounded-lg">
                <p className="text-xl font-semibold mb-4">Estimated Base Price: ${orderState.preliminaryQuote.baseEstimate}</p>
                <div className="text-gray-700">
                  <p className="mb-2">Selected Menus:</p>
                  <ul className="list-disc list-inside">
                    {orderState.preliminaryQuote.selectedMenus.map(menu => (
                      <li key={menu}>{menu.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</li>
                    ))}
                  </ul>
                  <p className="mt-2">
                    🔹 Price is preliminary and negotiable
                    🔹 Final quote will be discussed during consultation
                    🔹 Customization available
                  </p>
                </div>
              </div>
            )}
            <div className="mt-6 flex justify-between">
              <button onClick={() => setCurrentStep(Math.max(1, currentStep - 1))} className="bg-gray-200 text-gray-800 p-3 rounded flex items-center">
                <ArrowLeft className="mr-2" /> Back
              </button>
              <button onClick={() => {/* Handle final submission */}} className="bg-primary-600 p-3 rounded hover:bg-primary-700 flex items-center">
                Submit <ArrowRight className="ml-2" />
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4 py-4">
      <div className="max-w-xl mx-auto">
        <div className="bg-gray-100 p-2 rounded-full flex">
          {[1, 2, 3].map(step => (
            <div key={step} className={`flex-1 text-center py-2 rounded-full ${currentStep === step ? 'bg-primary-600 ' : 'bg-gray-200 text-gray-600'}`}>
              Step {step}
            </div>
          ))}
        </div>
        {renderStep()}
      </div>
    </div>
  );
}

export default OrderingProcess;
