function CateringInfo() {
  return (
    <section className="my-12">
      <h2 className="text-3xl font-semibold mb-6">Catering Information</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-medium mb-4">Services Offered</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Full-service catering</li>
            <li>Drop-off catering</li>
            <li>Equipment rental</li>
            <li>Staff hire (servers, bartenders)</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-medium mb-4">Event Types</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Weddings</li>
            <li>Corporate events</li>
            <li>Birthday parties</li>
            <li>Graduations</li>
            <li>Family gatherings</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default CateringInfo;

