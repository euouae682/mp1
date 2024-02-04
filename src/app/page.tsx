import Photo from "./Photo";

export default function Home() {
  return (
    <main>
      <div className="text-center h-[800px] py-80 bg-gradient-to-b from-cyan-200 to-white">
        <h1 className="font-semibold text-5xl" >Erosion</h1>
        <p className="italic" >A Photo Essay</p>
      </div>

      <div className="text-center my-20">
        <h1 className="font-semibold text-5xl" >Part 1: River</h1>
      </div>
      <Photo url="black.jpg" desc="I used to be a different person. I saw no point in and disliked social media. I didn’t appreciate the outdoors, instead taking solace in engineering. I thought news articles were a waste of time to read. Yet, at some point, a river of knowledge and media awareness flooded my mind with a new way of interacting with the world.
This is a story of the course of that river.
" caption="..." align="left" />
      <Photo url="nisqually.jpg" desc="Every river has a source, and this one came in the summer of my freshman year of high school.

I don’t think of myself as a very artistically minded person. However, seeing this sight awoke something within me; a desire to capture the moment into something that could preserve the gusts of wind in the air, the rushing of the river, and the foreboding shadow of Mount Rainier hiding behind the clouds. A desire that would sit in my mind from this point on.
" caption="Nisqually River, Mount Rainier National Park, Washington" align="right" />
      <Photo url="glacier.jpg" desc="At this point, the involvement of media in my interest had grown. I began indulging in landscape photography posts, particularly from travel accounts, on Instagram, scrolling through on sleepless nights. One park appeared over and over on my feed: Glacier National Park.

Naturally, I made it a goal to visit, and I did: in November. The sights were nothing like the pictures. Initially, I blamed it on the content produced by the photographers and the influencers; however, looking back at the photographs of the time, I realized I came upon a natural scene I discovered on my own, even if it didn’t align with the ones on social media.
" caption="View across Lake McDonald, Glacier National Park, Montana" align="left" />
      <Photo url="mammoth.jpg" desc="Disillusioned with landscape photography and travel accounts on social media, I recognized that some experiences could not be recreated via pictures. However, in retrospect, I was also hypocritical, as I began to post more photos on my own Instagram account.

I justified this by saying that I was trying to go to places that other people hadn’t; but really, this was just an excuse to do the same thing the people I was disillusioned with were doing; shouting from the rooftops, providing a one-sided view of these multifaceted natural areas, and pretending to be the authority on a place that I’ve visited once.
" caption="Mammoth Cave Entrance, Mammoth Cave National Park, Kentucky" align="right" />
      <Photo url="deathvalley.jpg" desc="Despite my dislike for travel accounts, I began to put more weight in the photos of my own. I justified this by emphasizing that these photos would primarily be for my own memory, instead of for other people’s enjoyment (my Instagram clearly contradicted this).

From this point on, I made a goal to visit every national park in the U.S.: to experience each park with my own eyes, not with someone else’s pictures. I visited the Wikipedia page for the national parks of the U.S., and scrolled down the list, marking each one as complete or incomplete. The journey has begun.
" caption="Zabriskie Point, Death Valley National Park, California/Nevada" align="left" />
      <Photo url="sanddunes.jpg" desc="The journey brought me to great places, from the deep blue of Crater Lake to the sand dunes of Great Sand Dunes, pictured here. This in particular was a few hour's drive from Colorado Springs.

However, something still felt empty. I began to reevaluate my role in producing media, consuming media, and photography. Had I misinterpreted the purpose of all of it? I felt a need to improve my own photography, a goal that explicitly interfered with my previous dislikes for that field on Instagram.
" caption="Great Sand Dunes, Great Sand Dunes National Park and Preserve, Colorado" align="right" />

      <div className="text-center my-20">
        <h1 className="font-semibold text-5xl" >Part 2: Waterfall</h1>
      </div>
      <Photo url="fjord.jpg" desc="At this point, I began to experiment with the composition of my photographs. I read articles on the importance of composition in photography, the rule of thirds, and the golden ratio. I played around with centering and symmetry in my photographs, such as this one. I had conversations with my photographer friend, who had better gear than me all around. 

For me, this photo taken on a cruise through Tracy Arm Fjord represented that shift where I began to truly produce media for people rather than put it on my social media accounts as a byproduct.
" caption="Tracy Arm Fjord, Tongass National Forest, Alaska" align="left" />
      <Photo url="road.jpg" desc="Right as I went on another road trip on the Pacific Coast, I saw one of the most impactful sunsets in my entire life.

The colorful hues, and the way it lit up the sky captivated me. I asked myself; would I ever be able to see this specific sight again?
" caption="Sunset on OR State Route 6 towards Tillamook, Oregon" align="right" />
      <Photo url="beach.jpg" desc="On the whole trip, I longed for another sunset. If I had been so interested in photography, why hadn’t I thought of capturing a sunset before? 

I began to understand the joy of photography as a way to spread a message; not anything incredibly deep, but just a celebration of the beauty of the natural world around us. As I brought my phone up, seeing the camera capture the warm oranges of the sun with the water, rocks, and clouds almost brought a tear to my eye. I was interpreting photography the wrong way; it usually wasn’t trying to promote a beautiful place, it was instead capturing a beautiful moment, each with its own special story." caption="Sunset at Endert Beach, Redwood National and State Parks, California" align="left" />
      <Photo url="cave.jpg" desc="I discovered another pivotal piece of media: a website called “More Than Parks”. This website was a breath of fresh air. It represented everything I enjoyed about parks and everything I didn’t about their presentation in the media. It told truths about the parks, it criticized them meaningfully, and it presented places unseen by the public eye. 

This website revitalized what I found interesting about national parks in the first place, and still remains a crucial part of my view towards national parks and conservation. I began to see beauty outside of the status quo. My obsession with parks began to snowball into something far more; an appreciation of conservation, and how humans interact with it.
" caption="The Doll’s Theater, Carlsbad Caverns National Park, New Mexico" align="right" />

      <div className="text-center my-20">
        <h1 className="font-semibold text-5xl" >Part 3: Reservoir</h1>
      </div>
      <Photo url="grandcanyon.jpg" desc="Pictured here is the Grand Canyon, in all its glory, carved out by the slow yet persistent Colorado River. Not pictured here is the horde of people just behind me, also yearning for a chance to say they’ve been in this exact spot." caption="Lipan Point, Grand Canyon National Park, Arizona" align="left" />
      <Photo url="deception.jpg" desc="Why are some places so popular when you go to hidden gems? That’s another aspect of the More Than Parks website that’s stuck with me this entire journey. 

This was also the point that I uncovered a camera that belonged to my sister. If I was going to capture moments, then I wanted to capture the rarer moments on my natural journey.
" caption="Small Cascade at Deception Falls, Mt. Baker-Snoqualmie National Forest, Washington" align="right" />
      <Photo url="sunset.jpg" desc="This obsession with moments as opposed to places led me to bring my camera almost anywhere with water, a view of the sky, or even just forests. This photo was taken during my senior sunset. The actual place may be beautiful, but if anything from other photographers and websites taught me, it's not the place that shines in this photo; its the beauty of the moment. Reuniting with friends, watching the sun set before departing for a greater life.
" caption="Richmond Beach Saltwater Park, Shoreline, Washington" align="left" />
      <Photo url="banff.jpg" desc="Of course, all of this profound stuff about photography and the natural world hasn’t superseded my original goal. In fact, if anything, it only made it stronger. This was taken in Banff National Park, in a quiet, quaintly peaceful, and beautiful area next to the otherwise extremely popular Bow Lake. This was part of a larger trip to include Canadian national parks to my checklist." caption="River near Bow Lake, Banff National Park, Alberta" align="right" />
      <Photo url="lake.jpg" desc="Around this time, I caught wind of murmurs to add a 64th national park, and it was likely going to be either Ocmulgee Mounds in Georgia or Chiricahua in Arizona. I read articles online, from National Geographic to Thrillist to - of course - More Than Parks.

Through my journey, I’ve become more and more engrossed in the issue of conservation. If we are to appreciate the moments we have with the natural world, we have to make sure the places are still there for those moments to be had. The announcement of a 64th national park had me incredibly excited; more than I should’ve been.
" caption="Sunset on Lake McDonald, Glacier National Park, Montana" align="left" />
      <Photo url="lavabeds.jpg" desc="I remember going into Mammoth Cave and having my mind blown. I thought that I had done something entirely new, something extremely novel; even though I was surrounded by at least 30 other people.

Something was different about Lava Beds. There were no tours; there were only caves and strongly worded warnings of how to not get lost. Exploring the caves was done under your own power; you could go as deep or as shallow as you’d like.

Ever since I began thinking of these trips as a collection of moments rather than a collection of places, I’ve gotten out of my comfort zone. I’ve begun to try genuinely new things. And of course, I’ve taken photos representing these moments.
" caption="Sunshine Cave, Lava Beds National Monument, California" align="right" />

      <div className="text-center my-20">
        <h1 className="font-semibold text-5xl" >Part 4: Delta</h1>
      </div>

      <Photo url="lassen.jpg" desc="Now I am a nature and conservation fanatic, as well as an aspiring photographer. How is that going to affect my future?

Sites such as More Than Parks and social media travel and photography accounts have shaped my perception of ecotourism and photography in such a way that I’ve begun to fall the media production rabbit hole and focus on nature photography as a long-term commitment.
" caption="Lassen Peak and Manzanita Lake, Lassen Volcanic National Park, California" align="left" />
      <Photo url="redwood.jpg" desc="I remember driving through Redwood National and State Parks, and when stopped at a flagger, seeing the fog through the redwoods. It was a moment that I felt had to be captured, and reflected the beauty of nature.

And then when I got home, I read about the Willow project. Before my journey to visit every national park, I might’ve felt indifferent about it. However, reading into it, I found the drilling of oil on the North Slope of Alaska incredibly dangerous and sad.

I guess I’m an environmentalist now.
" caption="Foggy view through redwoods, Redwood National and State Parks, California" align="right" />
      <Photo url="night.jpg" desc="If I did so many things during the day, why not expand that to the night?

One thing I was amazed by on Instagram other than landscape photography was astrophotography. It captures the stars and planets we will likely never be able to explore in our lifetimes, but that we can observe from far away.
" caption="Night sky through lodgepoles, Sequoia National Park, California" align="left" />
      <Photo url="basin.jpg" desc="It was a cloudy day over Great Basin National Park, which protects Wheeler Peak, the second-highest mountain in Nevada. Naturally, I was up at 12,000 feet.

Then the rain came. Then we heard a thunderclap. Then we saw a bright flash of light over in the distance. This happened when we were standing next to a grove of bristlecone pines, at 10,000 ft of elevation, on an escarpment. The rain quickly turned the trail into a river, as we ran down, the thunder pounding just before us.

We originally planned to camp, but the immense rain made it difficult, so we resorted to driving 2 hours back to civilization. On the way, I snapped a photo of the mountain range with my phone. 

Nature can offer beautiful moments. However, nature was not made for us. We are observers and explorers.
" caption="Cloudy Great Basin landscape, Great Basin National Park, Nevada" align="right" />
      <Photo url="reefsunset.jpg" desc="I took this photo at a viewpoint completely alone during sunset.

In retrospect, it was probably a bit dangerous. What if something happened to me? There would’ve been no one there to help. However, it was undeniably cathartic; away from civilization, with only a camera.

I had to acknowledge that this moment would not translate into photography. However, just knowing what it meant to me is good enough.
" caption="Sunset at Goosenecks Point, Capitol Reef National Park, Utah" align="left" />
      <Photo url="stanley.jpg" desc="It’s December 31, 2023. 

This is the last post on my social media, as of now. It’s a tree, silhouetted against the blue clouds in the sky, with the red highlights over the water from the sun just setting.

A new year, even more places to go, and even more moments to capture. Even more media to consume and be inspired by, and even more media to produce.
" caption="Sunset at Burrard Inlet, Stanley Park, British Columbia" align="right" />

<div className="h-80 bg-gradient-to-b from-white to-orange-500"> 
</div>
<div className="h-80 bg-gradient-to-b from-orange-500 to-red-800 text-center text-white">
<h1 className="text-5xl" >Hopefully with even more sunsets to capture.</h1>
</div>
<div className="h-20 bg-gradient-to-b from-red-800 to-black">
</div>
    </main>
  );
}
