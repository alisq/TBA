<!doctype html>
<html class="no-js" lang="">
    <head>

https://docs.google.com/spreadsheets/d/e//pub?output=csv

  

  https://spreadsheets.google.com/feeds/list/2PACX-1vR_ndDOt_GpWtoIL3r5EZBOvrIMLi7MQMcPJ8S8wtbFUIe-6hHvpOxvhaAEerWHMw/od6/public/values?alt=json-in-script&callback=      
        <?php 


            // require_once 'vendor/autoload.php'; 
            // $client = new \Google_Client();
            // $client->setApplicationName('TBA - Tools for Learning');
            // $client->setScopes([\Google_Service_Sheets::SPREADSHEETS]);
            // $client->setAccessType('offline');
            // $client->setAuthConfig(__DIR__ . '/TBAT4L.json');
            // $service = new Google_Service_Sheets($client);
            // $spreadsheetId = "14mLhk9stYNqQvmPoE0JGhlciPvLibUGa";
            
            // $range = 'Artist_Tools';
            // $response = $service->spreadsheets_values->get($spreadsheetId, $range);
            // $values = $response->getValues();
            // if (empty($values)) {
            //    print 'No data found.\n';
            // } else {
            //    foreach ($values as $row) {
            //       for ($i = 0; $i < sizeof($row); $i++) {
            //           echo $row[$i].'\n';
            //       }
            //    }
            // }


        ?>



        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>Toronto Biennial of Art | Tools for Learning</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- <link rel="manifest" href="site.webmanifest"> -->
        
        <link rel="stylesheet" href="css/main.css">
    </head>
    <body>

        <div id="web">
        <ul id="menu">
            <li id="intro" class="no-click">
                <div class="title no-click">TOOLS FOR LEARNING </div>
                <div class="contents"></div>
            </li>
            
            <li>
                <div class="title">Intro/About <div class="open-close"></div></div>
                <div class="contents">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a felis elit. Duis tellus velit, ornare vitae dui vitae, pretium ultrices odio. Aenean libero felis, scelerisque quis volutpat et, mattis sed justo. Nam eu laoreet odio, mattis cursus metus. Cras facilisis tempus lectus. Vestibulum rutrum mauris id nisi sodales, ut.
                </div>
            </li>
            
            <li>
                <div class="title">Adrian Blackwell <div class="open-close"></div></div>
                <div class="contents"></div>
            </li>
            
            <li>
                <div class="title">Adrian Stimson <div class="open-close"></div></div>
                <div class="contents"></div>
            </li>
            
            <li>
                <div class="title">Dana Claxton <div class="open-close"></div></div>
                <div class="contents"></div>
            </li>
            
            <li>
                <div class="title">Embassy of Imagination <div class="open-close"></div></div>
                <div class="contents"></div>
            </li>
            
            <li id="hera">
                <div class="title">Hera Buyuktasciyan <div class="open-close"></div></div>
                <div class="contents">
            TOOLS FOR LEARNING

<div class="artist">Hera Büyüktaşcıyan</div>
<div class="title-title">Studies on an Underground Forest</div>
<div class="desc">Carpet, metal (installation, found materials, annotation, algorithms)
2019</div>

<h4>BRIEF BIO</h4>

<p>Hera Büyüktaşçıyan locates the figure of the other between the twinned spectres of absence and invisibility in order to weave connections between identity, memory, space and time. She works as a storyteller, integrating metaphors from local myths, historic and iconographic elements of different geographies to open up new narrative scopes.</p>

<p><strong>LOCATION:</strong> 259 Lakeshore Boulevard East</p>


IMAGE OF WORK
CAPTION


<h4>BRIEF DESCRIPTION OF ARTIST PROJECT (150-200 words)</h4>
<p>(include context/conversation with the canon?)</p>

<h4>TOOL/EXERCISE (200-250 words max)</h4>
<p class="r22">Interview your neighbor about the place where they live. Ask them to share some interesting stories about their neighborhood and if they know about its past?</p>

<p class="w13">Based on your conversation, draw a picture of what your neighbor described. Do you remember all the details? How have you interpreted their memories of home? Does your drawing tell the same story or a new one? Share it with your neighbor and listen to how they respond.</p>


<h4>CONVERSATION/DISCUSSION POINTS (short questions)</h4>
<p class="w13 l5">What objects or materials do you keep with you to be reminded of home?</p>
<p>How do you share the stories of those objects? Do you tell it with words, sing a song, do a dance, draw a picture, make a map, or some other way?</p>
<p class="big">Can you share a story you know about Toronto? </p>
<p>How does your community hold on to memories of the past?</p>
<p>Which of those stories do you see around you in the city? And which are not brought to the surface?</p>


<p>CURRICULAR CONNECTIONS/LEARNING OUTCOMES (keyterms as bullet points)</p>
 


                </div>

                <button class="makeBook">print booklet</button>
            </li>
            
            <li>
    <div class="title">            Jae Jarell <div class="open-close"></div></div>
    <div class="contents"></div>
            </li>




        </ul>

            <br />
<a href="https://torontobiennial.org/"><img src="img/TBA-logo.png" class="TBA-logo"></a>

</div>

         <script src="js/jquery-3.2.1.min.js"></script>
         <script src="js/bindery.min.js"></script>

        <script src="js/main.js"></script>

        <script>

console.log("f")
//https://docs.google.com/spreadsheets/d/e/2PACX-1vR_ndDOt_GpWtoIL3r5EZBOvrIMLi7MQMcPJ8S8wtbFUIe-6hHvpOxvhaAEerWHMw/pubhtml



            sheetUrl = "http://cors.io/spreadsheets.google.com/feeds/cells/14mLhk9stYNqQvmPoE0JGhlciPvLibUGa/1/od6/public/full?alt=json";


$.getJSON(sheetUrl, function(data){
  var entry = data.feed.entry;
  console.log(data);
})
        </script>

        <!-- Google Analytics: change UA-XXXXX-Y to be your site's ID. -->
        <!-- <script>
            window.ga=function(){ga.q.push(arguments)};ga.q=[];ga.l=+new Date;
            ga('create','UA-XXXXX-Y','auto');ga('send','pageview')
        </script>
        <script src="https://www.google-analytics.com/analytics.js" async defer></script> -->
    </body>
</html>