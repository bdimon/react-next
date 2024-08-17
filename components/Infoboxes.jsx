import Infobox from './Infobox';

function Infoboxes(props) {
    return (
        // <>
    <section>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
            <Infobox 
            // dynamic views via propses
            heading="For Clients"
            backgroundColor="bg-gray-100"
            buttonInfo={{
              text: "Find subject",
              link: "/props",
              backgroundColor: "bg-amber-300",
            }}
            >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum dolorum veniam consequatur? Vel, unde aspernatur nobis officiis ipsa aut maxime rerum ratione doloribus repudiandae id! Nostrum aliquid magnam illo sequi!
        </Infobox>
        <Infobox 
            heading="For Customers"
            backgroundColor="bg-emerald-100"
            buttonInfo={{
              text: "Add subject",
              link: "/props/add",
              backgroundColor: "bg-emerald-400",
            }}
            >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum dolorum veniam consequatur? Vel, unde aspernatur nobis officiis ipsa aut maxime rerum ratione doloribus repudiandae id! Nostrum aliquid magnam illo sequi!
        </Infobox>
        </div>
      </div>
    </section>
      
        
        
        // </>
    );
}

export default Infoboxes;