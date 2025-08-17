// Section 1: Floating Hearts & Toggle
const welcome = document.getElementById('welcome');
const openBtn = document.getElementById('openDiary');
const diarySection = document.getElementById('diary-section');
const backBtn = document.getElementById('backBtn');
const yearFilter = document.getElementById('yearFilter');

function createHeart(){
  if(window.innerWidth<400 && document.querySelectorAll('.heart').length>15) return;
  const heart = document.createElement('div');
  heart.className='heart';
  heart.style.left=`${Math.random()*100}%`;
  heart.style.animationDuration=`${(Math.random()*3+3).toFixed(2)}s`;
  welcome.appendChild(heart);
  setTimeout(()=>heart.remove(),6000);
}
setInterval(createHeart, window.innerWidth<400 ? 700 : 400);

openBtn.addEventListener('click',()=>{
  diarySection.classList.add('active');
  diarySection.setAttribute('aria-hidden','false');
  welcome.style.display='none';
});
backBtn.addEventListener('click',()=>{
  diarySection.classList.remove('active');
  diarySection.setAttribute('aria-hidden','true');
  welcome.style.display='flex';
});

// Image Data
const images = [
{ src: "img/babyShower.jpeg", date: "10-Dec-2022", event: "My mom excited to welcome me. There was a Baby Shower held in ViajayaLakshmi Hotel where our family and friends to bless me!"},
{ src: "img/doctor.jpeg", date: "02-Jan-2023", event: "I said Hi!!! to doctor and the world. I know my mom was in pain and my pappa was emotional"  },
{ src: "img/photoshoot.jpeg", date: "03-Jan-2023", event: "This is my photoshoot, I gonna see how I was when I born in future"  },
{ src: "img/car.jpeg", date: "05-Jan-2023", event: "I goona take drive in our car. My pappa made my foot on the bonnet. He things Girl baby is always lucky"  },
{ src: "img/naming.jpeg", date: "12-Jan-2023", event: "My family decided to name me Anagha. Meaning of my name is taken from Lalitha Sahasranama which means Sinless and it another name of Goddess Lakshmi. From now on I am Ms.Anagha Vishal"  },
{ src: "img/1.jpeg", date: "05-Feb-2023", event: "My mom decided to give me wings so that I can fly freely as I completed One month."  },
{ src: "img/greatGrandma.jpeg", date: "25-Feb-2023", event: "Nice to meet you Great Grandmother. This pic was captured in Mandya on occation of Aunt housewarming"  },
{ src: "img/smile.jpeg", date: "26-Feb-2023", event: "See how well I can put smile on my pappa's face"  },
{ src: "img/2.jpeg", date: "02-Mar-2023", event: "By this time I got the nickname Cherry. Thanks to Shubhada akka for selecting that name for me."  },
{ src: "img/3.jpeg", date: "02-Apr-2023", event: "Am I looking like a chocolate? everyone started like me. Hehehe"  },
{ src: "img/puppy.jpeg", date: "22-Apr-2023", event: "Hurray! I got a companion to play with."  },
{ src: "img/4.jpeg", date: "02-May-2023", event: "I am a Master Chef now, I will prepare what I wish to eat but what to do I am maintaining the diet, so this is just to pose."  },
{ src: "img/mango.jpeg", date: "10-May-2023", event: "Mango! I know why it is called as King of all the fruits. I love to eat them."  },
{ src: "img/welcome.jpeg", date: "17-May-2023", event: "Nice Surpise pappa. My pappa welcomed me to his home with plesant surpise. This is my first visit to Pappa house."  },
{ src: "img/footprint.jfif", date: "18-May-2023", event: "Here is the pic of mine with the footprint over the wax. There are two message bottle which has a Tag which tied to my hand in Cloudnine and one more with the signature of my loved one!!!"  },
{ src: "img/ganesha.jfif", date: "21-May-2023", event: "My Pappa's Childhood friend :D What a sync our car 4 digit number sumup is 21"  },
{ src: "img/ellanande.jfif", date: "21-May-2023", event: "This was part of Anna shastra, but I taken up hand full of gold."  },
{ src: "img/makeup.jfif", date: "09-Jun-2023", event: "My 5th Month Photoshoot."  },
{ src: "img/amegundi.jfif", date: "06-Jun-2023", event: "This was my first dayout with family. We had been to Amegundi resort."  },
{ src: "img/bathtub.jfif", date: "28-Jun-2023", event: "Let me Swim"  },
{ src: "img/cargear.jfif", date: "05-Jul-2023", event: "I can shift gear myself pappa! you just help me with the clutch."  },
{ src: "img/6month.jfif", date: "13-Jul-2023", event: "Oh I completed half an year!!! Let me pose with the cake."  },
{ src: "img/traditional.jfif", date: "17-Jul-2023", event: "A photoshoot in traditional attire."  },
{ src: "img/7month.jfif", date: "13-Jul-2023", event: "Rainbow has 7 colour so my parents choose this as a theme for 7th month Photoshoot."  },
{ src: "img/amma.jfif", date: "05-Aug-2023", event: "Many more returns of the day Amma, you are lovely person who pampers me a lot!!!"  },
{ src: "img/longhair.jfif", date: "18-Aug-2023", event: "Mom said I am so adorable with Long hairs"  },
{ src: "img/teddygroup.jfif", date: "20-Aug-2023", event: "Here are the Teddybear collection of my mom! Of course I am the favourite among all !!! Lets collect more mom"  },
{ src: "img/lakshmi.jfif", date: "25-Aug-2023", event: "This how we celebrate Varamahalakshmi festival at home."  },
{ src: "img/butterfly.jfif", date: "06-Sep-2023", event: "This how I look when I am of 8month Old. Wings to fly :)"  },
{ src: "img/krishna.jfif", date: "07-Sep-2023", event: "I am in little krishna attire as we are celebrating Krishna Janmastami in our home."  },
{ src: "img/radhe.jfif", date: "09-Sep-2023", event: "Radhe is another name for Selfless and unconditional love."  },
{ src: "img/hair.jfif", date: "10-Sep-2023", event: "I dont like, I dont like it!!!"  },
{ src: "img/gadgets.jfif", date: "14-Oct-2023", event: "My mom keep saying that - your father play like to play with remote control car than you. thats the truth. So far I spent same time inside and outside my mom womb :)"},
{ src: "img/yogi.jfif", date: "14-Oct-2023", event: "King of North, Yogi Adthiyanath!!!"  },
{ src: "img/baba.jfif", date: "12-Nov-2023", event: "Me taking the blessing of Sai Baba, my parents are stance devoties of Sai Baba"  },
{ src: "img/pappa.jfif", date: "12-Nov-2023", event: "I will be Father's little Princess"  },
{ src: "img/crackers.jfif", date: "14-Nov-2023", event: "Crackers theme photoshoot, all set for celebration of Deepavali"  },
{ src: "img/deepavali.jfif", date: "14-Nov-2023", event: "Its my First deepavali and I love to lit up the Crackers! Dont preach me about pollution please!"  },

];

const albumGrid = document.getElementById('albumGrid');

// Extract unique years
const years = [...new Set(images.map(img=>img.date.split('-')[2]))].sort();
years.forEach(y=>{
  const option = document.createElement('option');
  option.value=y; option.textContent=y;
  yearFilter.appendChild(option);
});

// Render Thumbnails
function renderThumbnails(filteredImages){
  albumGrid.innerHTML='';
  filteredImages.forEach((obj, idx)=>{
    const container = document.createElement('div');
    container.className='thumb-container';
    container.style.width = '180px';
    container.style.height = '180px';

    const img = document.createElement('img');
    img.src=obj.src;
    img.alt="Photo";
    img.loading="lazy";

    container.appendChild(img);
    albumGrid.appendChild(container);

    img.addEventListener('click',()=> openLightbox(idx, filteredImages));
  });
}

// Filter by year
yearFilter.addEventListener('change',()=>{
  const val = yearFilter.value;
  const filtered = val==='all'? images : images.filter(img=>img.date.split('-')[2]===val);
  renderThumbnails(filtered);
});

// Initial load
renderThumbnails(images);

// Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;
let currentArray = images;

function openLightbox(idx, array){
  currentIndex=idx;
  currentArray=array;
  lightboxImg.src=currentArray[currentIndex].src;
  lightboxCaption.textContent=`${currentArray[currentIndex].date} - ${currentArray[currentIndex].event}`;
  lightbox.classList.add('active');
}
function closeLightbox(){ lightbox.classList.remove('active'); }
function nextImage(){ currentIndex=(currentIndex+1)%currentArray.length; updateLightbox(); }
function prevImage(){ currentIndex=(currentIndex-1+currentArray.length)%currentArray.length; updateLightbox(); }
function updateLightbox(){
  lightboxImg.src=currentArray[currentIndex].src;
  lightboxCaption.textContent=`${currentArray[currentIndex].date} - ${currentArray[currentIndex].event}`;
}

// Lightbox events
lightbox.addEventListener('click', e=> { if(e.target===lightbox) closeLightbox(); });
nextBtn.addEventListener('click', e=>{ e.stopPropagation(); nextImage(); });
prevBtn.addEventListener('click', e=>{ e.stopPropagation(); prevImage(); });

// Swipe support
let startX=0;
lightboxImg.addEventListener('touchstart', e=>{ startX=e.touches[0].clientX; });
lightboxImg.addEventListener('touchend', e=>{
  let dx=e.changedTouches[0].clientX-startX;
  if(dx>50) prevImage();
  else if(dx<-50) nextImage();
});
