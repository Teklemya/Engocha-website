import OrderingProcess from '../Order/OrderingProcess';
// import MenuHeader from '../Menu/MenuHeader';

function OrderPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* <MenuHeader /> */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl py-12 mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
            Catering Order Consultation
          </h1>
          <p className="text-center text-gray-600 max-w-2xl mx-auto ">
            Begin your culinary journey with our personalized catering service. 
            We will work with you to create a memorable dining experience tailored 
            to your event unique needs.
          </p>
          <OrderingProcess />
        </div>
      </div>
    </div>
  );
}

export default OrderPage;