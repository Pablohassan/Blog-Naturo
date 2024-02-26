import React from "react";
import logof from "../assets/feuille-logo.png";
import laureb from "../assets/laureb.jpeg";
import cardimage from "../assets/seserrentlamainjeune .webp";

import { PopupWidget } from "react-calendly";
import { Button, Card, CardFooter, CardHeader, Image } from "@nextui-org/react";
// Import the Image component from the next/image package

const Page1: React.FC = () => {
  return (
    <>
      <div className="min-h-screen flex justify-center item-center bg-provence bg-fixed" >
        <div className=" mb-8">  
          <img src={logof} alt="Laure" className="rounded-full h-16 w-16 mx-auto pt-4" />
          <h1 style={{ textShadow: "1px 1px 0px  black" }} className="font-black text-4xl  text-slate-200 pt-12 text-4xl text-center">Laure Bitaud Naturopathe</h1>
          <div className="min-w-full flex justify-items-start">
             <div className="max-w-[400px] min-w-[260px] pl-6  mr-12 mt-24" >
               <img className="rounded-2xl max-h-[550px]"   src={laureb}></img>
             </div>
            <h3 style={{ textShadow: "1px 1px 0px  black" }} className="p-8 rounded-2xl text-lg max-w-[500px] text-black yext-xl mt-28 mr-4 bg-slate-100/80">
              Après une certification en herboristerie à l’Institut Français de l’Herboristerie j’ai parfais l’étude de ce savoir ancestral.
              Poussée par l’envie d’en connaitre plus sur les plantes médicinales et comestibles j’ai voyagé sur la terre,
              puis sur la mer pour me confronter aux éléments ce qui m’a, par ailleurs, permis de sonder l’humain dans ses rapports aux autres et à lui même.
              La navigation est un voyage initiatique mais aussi et surtout une merveilleuse école de vie,
              stimulant sans cesse le besoin vital d’acquérir une pléthore de compétence.
              Apres avoir vécu ma plus belle aventure en mettant au monde, ma fille Lucie, j’ai décidé d’ouvrir mon champs d’action 
              en me formant à cette médecine traditionnelle prophylactique qu’est la naturopathie au sein de L’ École de Santé naturelle.
              </h3>
           
            </div>
        
        </div>
      </div>

      <PopupWidget
        url="https://calendly.com/naturordv/30min"
        /*
         * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
         * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
         */
        rootElement={document.getElementById("root")!}
        text="Click ici pour reserver ton Rdv!"
        textColor="#ffffff"
        color="#00a2ff"
      />

      {/* paragraphe 1 */}
      <div className="p-16">
        <h2 className="mt-12 font-bold text-4xl"> La Nauropathie</h2>
        <p className="p-16">
          La naturopathie, cet art ancestral de guérison, embrasse la sagesse de la nature pour promouvoir le bien-être.
           Elle nous enseigne que notre corps possède une capacité innée de guérison, et qu'en vivant en harmonie avec les
           cycles naturels, nous pouvons atteindre un état d'équilibre et de santé optimale.En prônant une alimentation vivante,
           l'exercice, la gestion du stress et l'utilisation des plantes médicinales, la naturopathie nous guide vers une vie
           plus saine. Elle nous rappelle l'importance de prendre soin de notre corps et de notre esprit, non pas comme une tâche,
          mais comme un privilège. En nous reconnectant à la nature, nous découvrons la clé d'une vie épanouie et harmonieuse.
        </p>

      </div>

      <div className="mt-16 font-black bg-fond-provence-logo min-h-screen bg-center bg-no-repeat">
        <div className="max-w-[90%] ">
          <h2 style={{ textShadow: "0px 1px 0px  black" }} className="text-white text-6xl text-left p-16">
            NATUROPATHIE
            <h3 style={{ textShadow: "1px 1px 0px  black" }} className="text-white text-2xl mt-16 p-12 justify-flex-center">
              <p> Vous désirez faire de votre alimentation une source de vie ?</p>
              <p>Grâce à la naturopathie, je peux vous guider vers une nourriture saine,anti-inflammatoire et anti-oxydantes
                Je vous aiderai également à trouver un équilibre psycho-émotionnelle ainsi que des activités physiques adaptées.
                Nous verrons ensemble comment faire évoluer votre hygiène de vie pour que vous deveniez act(eur)rice de votre bien-être.</p></h3>
          </h2>

        </div>
      </div>
      <div className="p-16">
        <h2 className="mt-12 font-bold text-4xl"> La Nauropathie</h2>
        <p className="p-16">
          La naturopathie, cet art ancestral de guérison, embrasse la sagesse de la nature pour promouvoir le bien-être. Elle nous enseigne que notre corps possède une capacité innée de guérison, et qu'en vivant en harmonie avec les cycles naturels, nous pouvons atteindre un état d'équilibre et de santé optimale. En prônant une alimentation vivante, l'exercice, la gestion du stress et l'utilisation des plantes médicinales, la naturopathie nous guide vers une vie plus saine. Elle nous rappelle l'importance de prendre soin de notre corps et de notre esprit, non pas comme une tâche, mais comme un privilège. En nous reconnectant à la nature, nous découvrons la clé d'une vie épanouie et harmonieuse.
        </p>
      </div>
      
      <div className="min-h-screen flex justify-center item-center bg-provence bg-fixed" >
        <div>
          <img src={logof} alt="Laure" className="rounded-full h-16 w-16 mx-auto" />
          <h2 style={{ textShadow: "1px 1px 0px  black" }} className="font-black text-xl bg-violet-200/80  text-slate-200 p-4 text-5xl  rounded-2xl m-12 flex flex-grow text-center">Nous enquêterons, ensemble, sur les raisons premières de vos problèmes sans chercher uniquement à poser un pansement dessus.
C’est un des préceptes de la naturopathie :

Trouver la cause de la cause!</h2>
          <h3 style={{ textShadow: "1px 1px 0px  black" }} className="text-lg max-w-[90%] m-10 flex flex-grow text-center text-black yext-xl mt-16 bg-slate-300/90 p-24 rounded-2xl">
          Je vous propose des accompagnements personnalisés en rapport avec les inflammations et douleurs chroniques des sphères corporelles suivantes :
           </h3>

           
        </div>
      </div>
      <div className="bg-slate-300 text-center  p-12 m-12 rounded-2xl w- ">
        Après une série de questions, j’établis votre bilan de vitalité et vous donne mes conseils, 
        afin de réajuster votre terrain pour que vous puissiez par la suite, optimiser votre force vitale et ainsi restaurer votre organisme.
      </div>

      <div className="min-h-screen flex flex-col justify-center items-center bg-leemon-strawberry bg-fixed bg-center">
        <div className="flex flex-col items-center">
          <img src={logof} alt="Laure" className="rounded-full h-16 w-16 mt-12" />
          <h1 style={{ textShadow: "1px 0px 0px  black" }} className="text-green-900 text text-3xl mb-8 font-bold text-center p-3 bg-slate-100/90 rounded-3xl">Les prestations Naturopathie</h1>
        </div>
        <div className="max-w-screen flex gap-x-2 justify-center items-center flex-wrap">
          <div style={{ width: "300px" }}>
            <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5 border-2 border-slate-200 ">
              <CardHeader className="absolute z-10 top-1 flex-col items-start">
                <p style={{ textShadow: "0px 1px 0px  black" }} className=" bg-white rounded-md text-green-900 uppercase font-bold p-1 text-xl"> 60 min </p>
                <h4 style={{ textShadow: "1px 2px 1px  black" }} className="text-green-100/90 font-medium text-2xl">Consultation de suivi</h4>
              </CardHeader>
              <Image
                removeWrapper
                alt="Card example background"
                className="z-0 w-full h-full scale-100 mb-5 -translate-y-6 object-center"
                src={cardimage}
              />
              <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                <div>
                  <p className="text-black text-tiny">Nouvelles places</p>
                  <p className="text-black text-tiny">Bientôt disponible</p>
                </div>
                <Button className="text-tiny" color="primary" radius="full" size="sm">
                  Réserver
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div style={{ width: "300px" }}>
            <Card isPressable={true} isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7 border-2 border-slate-200 ">
              <CardHeader className="absolute z-10 top-1 flex-col items-start">
                <p style={{ textShadow: "0px 1px 0px  black" }} className=" bg-white rounded-md text-green-900 uppercase font-bold p-1 text-xl">90 min</p>
                <h4 style={{ textShadow: "1px 2px 1px  black" }} className="text-green-100/90 font-medium text-2xl">Seance Decouverte</h4>
              </CardHeader>
              <Image
                removeWrapper
                alt="Card example background"
                className="z-0 w-full h-full scale-5 100-translate-y-6 object-cover "
                src={cardimage}
              />
              <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                <div>
                  <p className="text-black text-tiny">Places disponibles</p>
                  <p className="text-black text-tiny"></p>
                </div>

                <Button className="text-tiny" color="primary" radius="full" size="sm">
                  Reserver
                </Button>
              </CardFooter>
            </Card>
          </div>
       
        </div>
        <div style={{ textShadow: "1px 1px 0px  black" }} className=" bg-slate-100/90 text-green-900 text-2xl w-1/3 p-2 m-16 font-bold rounded-3xl text-center" >
           Le pack rééquilibrage alimentaire 
         </div>
         <div className="min-w-full p-8 m-2 bg-white rounded-2xl p-12 text-center">
           <p>
            <p className="text-xl font-bold m-4" >Idéal pour la perte de poids ou des problèmes en lien avec le métabolisme.</p>
            <p className="text-xl font-bold" >Le tarif total est de 330€ et se réparti comme suit :</p>
           </p>
         </div>
         <div className="max-w-screen gap-x-2 flex justify-center items-center flex-wrap m-12">
           <div style={{ width: "300px" }}>
             <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
              <CardHeader className="absolute z-10 top-1 flex-col items-start">
                <p style={{ textShadow: "0px 1px 0px  black" }} className=" bg-white rounded-md text-green-900 uppercase font-bold p-1 text-xl"> 30 min </p>
                <h4 style={{ textShadow: "1px 2px 1px  black" }} className="text-green-100/90 font-medium text-2xl">Consultation de suivi</h4>
                <h4 style={{ textShadow: "2px 1px 1px  black" }} className="text-white font-medium text-tiny m-2 ">Toutes les 2 semaines pendant 5 mois
                </h4>
                <h5 style={{ textShadow: "2px 2px 1px  black" }} className="text-slate-200/90 font-medium text-center text-6xl p-2 ">30€ </h5> <h5 style={{ textShadow: "1px 1px 1px  black" }} className="text-md text-slate-200 ml-4"> / seance</h5>
              </CardHeader>
              <Image
                removeWrapper
                alt="Card example background"
                className="z-0 w-full h-full scale-95 mb-5 -translate-y-6 object-center"
                src={cardimage}
              />
              <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                <div>
                  <p className="text-black text-tiny">Bientot disponible</p>
                  <p className="text-black text-tiny">Me prevenir</p>
                </div>
                <Button color='success' className="text-tiny" radius="full" size="sm">
                  Me prevenir
                </Button>
              </CardFooter>
             </Card>
           </div>
           <div style={{ width: "300px" }}>
             <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7 ">
               <CardHeader className="absolute z-10 top-1 flex-col items-start">
                <p style={{ textShadow: "0px 1px 0px  black" }} className=" bg-white rounded-md text-green-900 uppercase font-bold p-1 text-xl">90 min</p>
                <h4 style={{ textShadow: "1px 2px 1px  black" }} className="text-green-100/90 font-medium text-2xl">Seance Decouverte</h4>
                <h5 style={{ textShadow: "2px 2px 1px  black" }} className="text-slate-200/90 font-medium text-center text-6xl ml-2 pt-8 ">60€ </h5>
               </CardHeader>
              <Image
                removeWrapper
                alt="Card example background"
                className="z-0 w-full h-full scale-95 -translate-y-6 object-cover"
                src={cardimage}
               />
               <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                 <div>
                  <p className="text-black text-tiny">Places disponibles</p>
                  <p className="text-black text-tiny"></p>
                 </div>
                 <Button className="text-tiny" color="success" radius="full" size="sm">
                  Reserver
                 </Button>
               </CardFooter>
            </Card>
          </div>






        </div>




      </div>



    </>
  );
};


export default Page1;