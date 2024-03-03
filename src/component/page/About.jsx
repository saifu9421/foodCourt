import Navbar from "../navbar/Navbar";


const About = () => {
    return (
        <>
        <Navbar></Navbar>

           <div className="lg:w-9/12 lg:h-screen  md:h-screen  md:w-10/12 grid lg:flex md:flex  gap-9 items-start lg:mt-40 md:mt-40 mt-5 mb-4 lg:mb-20 md:mb-20  md:mx-auto mx-auto w-11/12 lg:mx-auto">
              <div>
                  <img className=" rounded-lg w-11/12" src="https://i.ibb.co/HPHV7vF/Jewish-Shabbat-meal.jpg" alt="" />
              </div>
              <div>
                  <h1 className="lg:text-6xl md:text-6xl text-xl font-serif mb-3 lg:mb-3 md:mb-3 ">Welcome to Resto</h1>
                  <p className="lg:text-xl md:text-xl text-lg space-y-7 font-serif">On her way she met a copy. The copy warned the Little Blind Text, that where  it came from it would have been rewritten a thousand times and everything  that was left from its origin would be the word "and" and the Little Blind Text  should turn around and return to its own, safe country. A small river named  Duden flows by their place and supplies it with the necessary regelialia. It is a  paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                  <p  className="lg:mt-12 md:mt-12 mt-5 text-2xl font-serif">Special Recipe:</p>

          <div className="grid lg:grid-cols-3 md:grid-cols-3  lg:gap-4 md:gap-6 gap-5  ml-10 lg:ml-0 md:ml-0 mt-5 lg:mt-5 md:mb-5">
          <img className="w-44 rounded-lg" src="https://i.ibb.co/XJQbvGC/whole-chicken-grill-served-with-rice-garnish-white-plate.jpg" alt="" />
          <img className="w-44 rounded-lg" src="https://i.ibb.co/G7k38Yv/side-lamb-ragout-with-fried-onion-carrot-tomato-sauce-greens-vegetable-salad-table.jpg" alt="" />
          <img className="w-44 rounded-lg"  src="https://i.ibb.co/9qSbQQC/authentic-italian-pasta.jpg" alt="" />
          </div>

              </div>
        </div>
        </>
    );
};

export default About;