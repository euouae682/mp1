import Photo from "./Photo";

export default function Home() {
  return (
    <main>
      <div className="text-center h-[1200px] py-80 bg-gradient-to-b from-cyan-200 to-white">
        <h1 className="font-semibold text-5xl" >Erosion</h1>
        <p className="italic" >A Photo Essay</p>
        <p className="italic">Jason Zhao</p>
      </div>

      <div className="text-center my-20">
        <h1 className="font-semibold text-5xl" >Part 1: River</h1>
      </div>
      <Photo url="black.jpg" desc={["I’m Jason Zhao.", "I used to be a different person. I saw no point in and disliked social media. I occasionally hiked, but I didn’t truly appreciate the outdoors; it was just a way to get my legs moving. I thought news articles were a waste of time to read."]} caption="..." align="left" />
      <Photo url="nisqually.jpg" desc={["It was the summer of my freshman year of high school. My mom dragged me along for a trip to Mount Rainier National Park. I didn’t think much of it.", "It was a cloudy day, and not much could be seen. My mom, enthusiastic, pulled me onto a trail to Carter Falls.", "And then, as we walked on a bridge over a river, and I looked left, the clouds began to part ever so slightly.", "I don’t think of myself as a very artistically minded person. However, seeing this sight awoke something within me; a desire to capture the moment into something that could preserve the gusts of wind in the air, the intricate yet coarse rushing of the river down the field of rocks, and the foreboding shadow of Mount Rainier hiding behind the clouds."
]} caption="Nisqually River, Mount Rainier National Park, Washington" align="right" />
      <Photo url="glacier.jpg" desc={["Back home, I checked out a book called “10 Best of Everything: National Parks”, published by National Geographic. All things considered, it wasn’t an incredibly special book. However, I remember flipping through it every night, looking at the images and the parks detailed, and imagining myself there. I found beauty in each of these places, and I wanted to capture my memories there.", "I began indulging in landscape photography posts, particularly from travel accounts on Instagram, scrolling through them on sleepless nights. One park appeared over and over on my feed: Glacier National Park.", "In November, my mom and I drove over to our old Subaru to the lake; which was also the only part of the park open. As we walked over to the lake, I felt that same feeling I had at Mount Rainier, as the trees opened up into a panorama of foreign yet close snowy mountains over the rippling of cold waves. It was yet another addictive moment of peace and euphoria; I was hooked."]} caption="View across Lake McDonald, Glacier National Park, Montana" align="left" />
      <Photo url="mammoth.jpg" desc={["There was one section in that book that remained with me ever since.", "It says that to find the beautiful sights you always see online and in books, you must think like a photographer.", "I decided to take this a bit further. Instead of thinking like a photographer, I wanted to become a photographer. Inspired by all of the nature Instagram posts on my feed, I remembered all those beautiful moments I felt before and believed that they could be captured in a camera if done right.", "I began to apply the most basic compositional principles to my phone camera, beginning with Mammoth Cave National Park in Kentucky, another park in the chain of national parks that I was building up. We were on a cave tour, and I took this photograph. I felt that feeling again."]} caption="Mammoth Cave Entrance, Mammoth Cave National Park, Kentucky" align="right" />
      <Photo url="deathvalley.jpg" desc={["On a trip to Las Vegas, I posed an idea to my mom: Death Valley is only an hour and a half away, why don’t we go? She agreed. Needless to say, there were no regrets. It just felt so foreign, so separated from mainstream society. The feeling of standing above the badlands of Zabrinskie Point made me fall in love with the deserts of the U.S..", "I began posting my photos on my Instagram account. I wanted to show people the beauty of the national parks, show people those beautiful moments that brought me into all of this in the first place.", "From this point on, I also made a goal to visit every national park in the U.S.: to experience each park with my own eyes. I visited the Wikipedia page for the national parks of the U.S., and scrolled down the list, marking each one as complete or incomplete. The journey has begun."]} caption="Zabriskie Point, Death Valley National Park, California/Nevada" align="left" />

      <div className="text-center my-20">
        <h1 className="font-semibold text-5xl" >Part 2: Waterfall</h1>
      </div>
      <Photo url="fjord.jpg" desc={["At this point, I wanted to improve my photography. I began to experiment with the composition of my photographs. I read articles on the importance of composition in photography, the rule of thirds, and the golden ratio. I played around with centering and symmetry in my photographs, such as this one. I had conversations with my photographer friend, who had better gear than me all around.", "For me, this photo taken on a cruise through Tracy Arm Fjord represented that shift where I began to focus on actually producing media for people rather than putting it on my social media accounts as a byproduct."]} caption="Tracy Arm Fjord, Tongass National Forest, Alaska" align="left" />
      <Photo url="road.jpg" desc={["Right as I went on another road trip on the Pacific Coast, I saw one of the most impactful sunsets in my entire life.", "The sky lit up with an array of oranges, yellows, and blues. The sun, lit up the clouds from behind, making each one feel ethereal. It was one of the most beautiful things I have ever seen up until that point, and it was on some random road in Oregon.", "I understood why sunset was such a coveted time not just for photography, but for anyone seeking beauty."]} caption="Sunset on OR State Route 6 towards Tillamook, Oregon" align="right" />
      <Photo url="beach.jpg" desc={["On the whole trip, I longed for another sunset. If I had been so interested in photography, why hadn’t I thought of capturing a sunset before? ", "I decided we would have to see another sunset on this trip. I checked one of my other National Geographic books, “Secrets of the National Parks”, one that I would also read every night.", "Since we were at Redwood National Park, we settled on Enderts Beach. By the time we parked, it was golden hour and the sky was dotted with clouds. As I brought my phone up, seeing the camera capture the warm oranges of the sun with the water, rocks, and clouds almost brought a tear to my eye. I asked myself, if I was a viewer, could I reproduce this feeling through a photograph on Instagram?"]} caption="Sunset at Enderts Beach, Redwood National and State Parks, California" align="left" />
      <Photo url="cave.jpg" desc={["After going underground at Carlsbad Caverns, where I took this photo, I felt very satisfied with my goal and my photography skills. To wind down, I surfed Wikipedia, clicking from hyperlink to hyperlink until I (of course) ended up at a Wikipedia page for the Lencois Maranhenses National Park in Brazil, a beautiful expanse of dunes and lagoons.", "And then I saw one word that stuck out with me: ecotourism.", "Excited, I clicked on the article; and my excitement quickly crumbled into a state of emptiness. Ecotourism is tourism to natural areas with environmental issues and local communities in mind. In other words, not me: I was just another tourist. As I scrolled down to the “Criticisms” section, I read that some people think the word is an oxymoron. Was what I was doing actively worsening the environment? Was I thinking about the places I was photographing, or was I thinking about the photographs themselves? Am I as much of a conservationist as I thought?"]} caption="The Doll’s Theater, Carlsbad Caverns National Park, New Mexico" align="right" />

      <div className="text-center my-20">
        <h1 className="font-semibold text-5xl" >Part 3: Reservoir</h1>
      </div>
      <Photo url="grandcanyon.jpg" desc={["Pictured here is the Grand Canyon, in all its glory, carved out by the slow yet persistent Colorado River.", "Not pictured here is the horde of people just behind me, also yearning for a chance to say they’ve been in this exact spot, with nature, to get this exact shot that will be shown on Instagram feeds to come.", "I thought to myself, would this photo change anything?"]} caption="Lipan Point, Grand Canyon National Park, Arizona" align="left" />
      <Photo url="deception.jpg" desc={["I had just uncovered a mirrorless camera that belonged to my sister. A Sony Alpha-6000.", "We were passing through the Cascades via Stevens Pass, and we pulled into a parking lot for Deception Falls. Setting up my tripod, I took a good photo. Not that it matters."]} caption="Small Cascade at Deception Falls, Mt. Baker-Snoqualmie National Forest, Washington" align="right" />
      <Photo url="sunset.jpg" desc={["This photo was taken during my senior sunset.", "As I looked out into the strait and saw the sunset over the waves, the sun’s light reflecting onto them, for a moment I remembered the feeling when I went to Mount Rainier for the first time. ", "Maybe it's not about the places. Maybe it’s about the moments instead."]} caption="Richmond Beach Saltwater Park, Shoreline, Washington" align="left" />
      <Photo url="banff.jpg" desc={["As I slowly began to appreciate the moments instead of the places, I began to rediscover what I loved so much about nature. The summer after I graduated from high school, my mom and I planned a long road trip through the Canadian Rockies.", "During the trip, I found a website called “More Than Parks”. This website was a breath of fresh air. It represented everything I enjoyed about parks and everything I didn’t about their presentation in the media. It told truths about the parks, criticized them meaningfully, and presented places unseen by social media and the public eye. It encouraged respectful tourism, to appreciate the nature away from these places as well.", "This website revitalized what I found interesting about national parks in the first place, and remains a crucial part of my view towards national parks and conservation.", "This photo, a quiet, peaceful river in an otherwise crowded Banff National Park, is one I loved taking, merely because it felt like a return to what I loved so much about these places: letting yourself absorb into them."]} caption="River near Bow Lake, Banff National Park, Alberta" align="right" />
      <Photo url="lake.jpg" desc={["I disliked many nature and travel accounts since they reinforced the same few locations and began to follow lesser-known, often independent photographers who photographed with detail and intention. By this point, I had also come to terms with my own role in social media. My photos of landscapes, sometimes well-known, won’t change the world. However, if I seek out the moments that I love about nature, and photograph them, if it gives even just one person a spark of inspiration or an appreciation for the environment, I will feel happier.", "This photo was taken on a revisit to Glacier National Park, one of the originals that propelled me on this journey. As I sat on the shores of the lake and pulled out my tripod, I must have sat there for at least an hour. In between long exposure shots, I would sit there, and just absorb the cold air."]} caption="Sunset on Lake McDonald, Glacier National Park, Montana" align="left" />
      <Photo url="lavabeds.jpg" desc={["Ever since I began thinking of these trips as a collection of moments rather than a collection of places, I’ve worked on getting out of my comfort zone. I’ve begun to try genuinely new things.", "I remember going into Mammoth Cave and having my mind blown. I thought that I had done something entirely new, something extremely novel; even though I was surrounded by at least 30 other people, who probably thought the same.", "Reading the brochure for Lava Beds National Monument, something was different. There were no tours; there were only caves and strongly worded warnings of how to not get lost. Exploring the caves was done under your power; you could go as deep or as shallow as you’d like.", "This photo was taken in Sunshine Cave. As I sat under the skylight, I both cherished and questioned the solitude. More people should be here - but they aren’t."]} caption="Sunshine Cave, Lava Beds National Monument, California" align="right" />

      <div className="text-center my-20">
        <h1 className="font-semibold text-5xl" >Part 4: Delta</h1>
      </div>

      <Photo url="lassen.jpg" desc={["So yes; I am a fanatic for public land, as well as an aspiring photographer, and it's only getting more and more intense.", "This shot was taken at Lassen Volcanic National Park, where I ran around a mile out to get this shot. I was alone - my mom was too tired to come along. This marks it as one of the first photographs I've taken where I've been truly alone.", "This commitment could qualify me as someone who focuses on nature photography. However, I seek the moment just as I do the photograph."]} caption="Lassen Peak and Manzanita Lake, Lassen Volcanic National Park, California" align="left" />
      <Photo url="redwood.jpg" desc={["I remember driving through Redwood National and State Parks, seeing the fog through the redwoods. It was a moment that I felt had to be captured. In the moment, I felt the resilience of the redwoods.", "When I got home, I read a New York Times article about the Willow project, a massive oil drilling project that threatens global climate. Before my journey to visit every national park, I might’ve felt indifferent about it. However, the article reminded me that nature itself is being altered by humans. We are causing the Earth to warm. We are causing the sea level to rise. We are causing ice to melt, all at an unnatural, alarming rate.", "I’ve never felt so strongly about an issue before."]} caption="Foggy view through redwoods, Redwood National and State Parks, California" align="right" />
      <Photo url="basin.jpg" desc={["It was a cloudy day over Great Basin National Park, which protects Wheeler Peak, the second-highest mountain in Nevada. We were up at an elevation of 10,000 feet on an escarpment, hiking through a grove of bristlecone pines.", "Then the rain came. Then we heard a thunderclap. Then we saw a bright flash of light over in the distance. The rain quickly turned the trail into a river, as we ran down, the thunder pounding just before us.", "We originally planned to camp, but the immense rain made it difficult, so we resorted to driving 2 hours back to civilization. On the way, I snapped a photo of the Nevadan desert beneath the mountain. ", "Nature can offer beautiful moments. However, nature was not made for us. We must be respectful."]} caption="Cloudy landscape near Great Basin National Park, Nevada" align="right" />
      <Photo url="reefsunset.jpg" desc={["I took this photo at a viewpoint completely alone during sunset.", "In retrospect, it was a bit dangerous. What if something happened to me? There would’ve been no one there to help. However, it was undeniably cathartic; away from civilization, with only a camera.", "I had to acknowledge that this moment would not translate into photography. No one viewing this photo, whether on Instagram or in an art gallery, would be able to extract that meaning from the photo alone. However, just knowing what it meant to me was comforting enough."]} caption="Sunset at Goosenecks Point, Capitol Reef National Park, Utah" align="left" />
      <Photo url="stanley.jpg" desc={["This is the last post on my social media, as of now. It’s a tree, silhouetted against the blue clouds in the sky, with the red highlights over the water from the sun just setting, taken on December 31, 2023. The last sunset of the year.", "The sun has set in 2023, and it has risen in a new year. I have visited 38/63 national parks and multiple other state and federal sites. I have experienced countless moments and produced multiple photos of my experiences.", "To think that a few books, a bunch of Instagram posts, Wikipedia, and a website have shaped this much of my life is astounding. I can only imagine and look forward to where it will bring me in 2024."]} caption="Sunset at Burrard Inlet, Stanley Park, British Columbia" align="right" />

<div className="h-80 bg-gradient-to-b from-white to-orange-500"> 
</div>
<div className="h-80 bg-gradient-to-b from-orange-500 to-red-800 text-center text-white">
<h1 className="text-5xl" >Hopefully places with even more sunsets to capture.</h1>
</div>
<div className="h-20 bg-gradient-to-b from-red-800 to-red-900 text-white relative">
<p className="text-sm bottom-5 left-8 absolute">Instagram: @jason_z_photography</p>
</div>
    </main>
  );
}
