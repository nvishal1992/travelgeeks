$(document).ready(function () {
  const pokemons = [
	{ img: "img/babyShower.jpeg", date: "10-Dec-22", event: "My mom excited to welcome me. There was a Baby Shower held in ViajayaLakshmi Hotel where our family and friends to bless me!"},
{ img: "img/doctor.jpeg", date: "02-Jan-23", event: "I said Hi!!! to doctor and the world. I know my mom was in pain and my pappa was emotional"  },
{ img: "img/photoshoot.jpeg", date: "03-Jan-23", event: "This is my photoshoot, I gonna see how I was when I born in future"  },
{ img: "img/car.jpeg", date: "05-Jan-23", event: "I goona take drive in our car. My pappa made my foot on the bonnet. He things Girl baby is always lucky"  },
{ img: "img/naming.jpeg", date: "12-Jan-23", event: "My family decided to name me Anagha. Meaning of my name is taken from Lalitha Sahasranama which means Sinless and it another name of Goddess Lakshmi. From now on I am Ms.Anagha Vishal"  },
{ img: "img/1.jpeg", date: "05-Feb-23", event: "My mom decided to give me wings so that I can fly freely as I completed One month."  },
{ img: "img/greatGrandma.jpeg", date: "25-Feb-23", event: "Nice to meet you Great Grandmother. This pic was captured in Mandya on occation of Aunt housewarming"  },
{ img: "img/smile.jpeg", date: "26-Feb-23", event: "See how well I can put smile on my pappa's face"  },
{ img: "img/2.jpeg", date: "02-Mar-23", event: "By this time I got the nickname Cherry. Thanks to Shubhada akka for selecting that name for me."  },
{ img: "img/3.jpeg", date: "02-Apr-23", event: "Am I looking like a chocolate? everyone started like me. Hehehe"  },
{ img: "img/puppy.jpeg", date: "22-Apr-23", event: "Hurray! I got a companion to play with."  },
{ img: "img/4.jpeg", date: "02-May-23", event: "I am a Master Chef now, I will prepare what I wish to eat but what to do I am maintaining the diet, so this is just to pose."  },
{ img: "img/mango.jpeg", date: "10-May-23", event: "Mango! I know why it is called as King of all the fruits. I love to eat them."  },
{ img: "img/welcome.jpeg", date: "17-May-23", event: "Nice Surpise pappa. My pappa welcomed me to his home with plesant surpise. This is my first visit to Pappa house."  },
{ img: "img/footprint.jfif", date: "18-May-23", event: "Here is the pic of mine with the footprint over the wax. There are two message bottle which has a Tag which tied to my hand in Cloudnine and one more with the signature of my loved one!!!"  },
{ img: "img/ganesha.jfif", date: "21-May-23", event: "My Pappa's Childhood friend :D What a sync our car 4 digit number sumup is 21"  },
{ img: "img/ellanande.jfif", date: "21-May-23", event: "This was part of Anna shastra, but I taken up hand full of gold."  },
{ img: "img/makeup.jfif", date: "09-Jun-23", event: "My 5th Month Photoshoot."  },
{ img: "img/amegundi.jfif", date: "06-Jun-23", event: "This was my first dayout with family. We had been to Amegundi resort."  },
{ img: "img/bathtub.jfif", date: "28-Jun-23", event: "Let me Swim"  },
{ img: "img/cargear.jfif", date: "05-Jul-23", event: "I can shift gear myself pappa! you just help me with the clutch."  },
{ img: "img/6month.jfif", date: "13-Jul-23", event: "Oh I completed half an year!!! Let me pose with the cake."  },
{ img: "img/traditional.jfif", date: "17-Jul-23", event: "A photoshoot in traditional attire."  },
{ img: "img/7month.jfif", date: "13-Jul-23", event: "Rainbow has 7 colour so my parents choose this as a theme for 7th month Photoshoot."  },
{ img: "img/amma.jfif", date: "05-Aug-23", event: "Many more returns of the day Amma, you are lovely person who pampers me a lot!!!"  },
{ img: "img/longhair.jfif", date: "18-Aug-23", event: "Mom said I am so adorable with Long hairs"  },
{ img: "img/teddygroup.jfif", date: "20-Aug-23", event: "Here are the Teddybear collection of my mom! Of course I am the favourite among all !!! Lets collect more mom"  },
{ img: "img/lakshmi.jfif", date: "25-Aug-23", event: "This how we celebrate Varamahalakshmi festival at home."  },
{ img: "img/butterfly.jfif", date: "06-Sep-23", event: "This how I look when I am of 8month Old. Wings to fly :)"  },
{ img: "img/krishna.jfif", date: "07-Sep-23", event: "I am in little krishna attire as we are celebrating Krishna Janmastami in our home."  },
{ img: "img/radhe.jfif", date: "09-Sep-23", event: "Radhe is another name for Selfless and unconditional love."  },
{ img: "img/hair.jfif", date: "10-Sep-23", event: "I dont like, I dont like it!!!"  },
{ img: "img/gadgets.jfif", date: "14-Oct-23", event: "My mom keep saying that - your father play like to play with remote control car than you. thats the truth. So far I spent same time inside and outside my mom womb :)"},
{ img: "img/yogi.jfif", date: "14-Oct-23", event: "King of North, Yogi Adthiyanath!!!"  },
{ img: "img/baba.jfif", date: "12-Nov-23", event: "Me taking the blessing of Sai Baba, my parents are stance devoties of Sai Baba"  },
{ img: "img/pappa.jfif", date: "12-Nov-23", event: "I will be Father's little Princess"  },
{ img: "img/crackers.jfif", date: "14-Nov-23", event: "Crackers theme photoshoot, all set for celebration of Deepavali"  },
{ img: "img/deepavali.jfif", date: "14-Nov-23", event: "Its my First deepavali and I love to lit up the Crackers! Dont preach me about pollution please!"  },



];

  const $flipbook = $(".flipbook");

  // Front covers
  $flipbook.append(`<div class="hard"><img src="img/cover-image.png" alt="Cover Image" style="width:100%; height:100%; object-fit: cover;" /></div>`);
  $flipbook.append(`<div class="hard"></div>`);

  // Intro page
  $flipbook.append(`<div><small>Some amazing movements ❤️</small><br><small>Swipe like a physical book</small></div>`);

  // Pages for each Pokemon - left image, right text (date + event)
  pokemons.forEach(({ img, date, event }) => {
    $flipbook.append(`
      <div class="page-left">
        <img src="${img}" alt="Pokemon Image" />
      </div>
    `);

    $flipbook.append(`
      <div class="page-right">
        <div class="date">${date}</div>
        <div class="event">${event}</div>
      </div>
    `);
  });

  // Back covers
  $flipbook.append(`<div class="hard">Stay Tuned for more update!!! <small></small></div>`);


  // Calculate flipbook size for responsiveness
  const maxWidth = 800;
  const maxHeight = 600;
  const margin = 40;

  let width = window.innerWidth - margin;
  let height = window.innerHeight - margin;

  if (window.innerWidth <= 700) {
    // Full viewport on mobile
    width = window.innerWidth;
    height = window.innerHeight;
  } else {
    // Maintain aspect ratio 4:3 on desktop
    if (width / height > 4 / 3) {
      width = (height * 4) / 3;
    } else {
      height = (width * 3) / 4;
    }
    width = Math.min(width, maxWidth);
    height = Math.min(height, maxHeight);
  }

  // Initialize turn.js
  $flipbook.turn({
    width: width,
    height: height,
    autoCenter: true,
    duration: 1500,
    elevation: 50,
    gradients: true
  });
});


