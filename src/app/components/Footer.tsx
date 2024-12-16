
const Footer = () => {
  return (
    <>
 <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5  mt-32 p-5">
 <div className="flex flex-col items-center text-center">
    <h1 className="text-3xl font-bold">A LITTLE ABOUT STAMINA.</h1>
    <p className="w-full sm:w-96 mt-3 leading-relaxed">Stamina is the ability to sustain prolonged physical or mental effort. it involves cardlovascular and muscular endurance,
        allowing you to perform activities for longer without tiring. Regular exercise improvesstamina.  </p>
        <button className="mt-3 border-solid border-orange-700 border-2 p-2 rounded-full bg-orange-600 w-full sm:w-72">Become A Member</button>
        </div>
        
        <div className="flex flex-col items-center cursor-pointer">
        <ul className="grid grid-cols-3 gap-3 sm:space-y-3 sm-grid-cols-1">
            <li><h2>CLASSES</h2></li>
            <li>Cardio</li>
            <li>Body Building</li>
            <li>Yoga</li>
            <li>Boxing</li>
            <li>Running</li>
        </ul>
        </div>
        <div className="flex flex-col  items-center cursor-pointer" >
        <ul className="grid grid-cols-3 gap-3 sm:space-y-3 sm:grid-cols-1">
            <li>Boxing</li>
            <li>Martial Arts</li>
            <li>Karate</li>
            <li>Kungfu</li>
            <li>Basketball</li>
        </ul>
        </div>
        <div className="flex flex-col  items-center cursor-pointer">
        <ul className="grid grid-cols-3 gap-3 sm:space-y-3 sm:grid-cols-1">
            <li>Badminton</li>
            <li>Body Building</li>
            <li>Teams</li>
            <li>Advertise</li>
        </ul>
        </div>
    </div>

      
    </>
  )
}

export default Footer;
