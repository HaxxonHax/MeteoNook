export default {
    "en": {
        "lang": "English",
        "title": "MeteoNook for {island}",
        "hTab": "Welcome",
        "sTab": "Seed",
        "yTab": "Yearly",
        "mTab": "Monthly",
        "hTWelcome": "Welcome to MeteoNook Alpha",
        "hWelcome": "<p>MeteoNook is a weather forecaster for <i>Animal Crossing: New Horizons</i> versions 1.2.0 and 1.2.1.</p><p>This tool will predict your island's weather patterns, including exact times for meteor showers, rainbows and the aurora borealis. To get started, you'll need the seed, a long number unique to your island that determines what your weather will be. Follow the instructions on the <b>Seed</b> tab to find it.</p>",
        "hTLog": "Changelog",
        "hLog20200610": "Initial testing release",
        "hLog20200611": "Added per-second and rainbow/aurora searching, fog forecasts, week borders and some more stuff I forgot",
        "hLog20200612": "Fixed calculation of shooting star times and wind power after midnight on the last two days of the month",
        "hLog20200613": "Fixed bug where seed searches involving shooting star times with seconds wouldn't actually match anything (I'm sorry, this was really silly)",
        "hLog20200614": "Fixed checkboxes for aurora not updating properly. Restricted Bunny Day special weather to 2020. Added 'possible patterns' display to the seed finder, and warnings for event days. Added 12-hour display option.",
        "hLog20200615": "Added translation support and a Spanish translation.",
        "hLog20200616": "Fixed bug involving meteor shower gaps ending in the last minute of the hour (X:59).",
        "hTFAQ": "Frequently Asked Questions",
        "hQSeed": "Will my seed change if I time travel?",
        "hASeed": "No. It's picked randomly when you create your island and never changes.",
        "hQCeleste": "Where is Celeste?",
        "hACeleste": "At the start of the week, the game picks a random day for Celeste to appear out of the days that have meteor showers. This is fully random and not based on the seed, and cannot be predicted.",
        "hQMoreData": "Why does it say I need more data?",
        "hAMoreData": "<p>There are over 2 billion possible weather seeds, but only one is correct for your island. MeteoNook goes through every single possibility, calculates the weather it would give, and checks it against the data you provide. If it doesn't make sense (e.g. you said you had rain at a given time, but the seed would make it sunny) then that possibility is ignored.</p><p>During testing, we've had success with the following combinations...</p><ul><li>The known dates for between 5 and 7 heavy showers</li><li>The known hour and minute times for stars in a light shower, spanning between 1 and 3 hours</li><li>The known hour, minute and second times for a few different stars in a light shower</li><li>The known dates and times for between 5 and 7 rainbows</li></ul><p>It is of course heavily randomised, though. You might get lucky and find yours with less information, or you might need more!</p>",
        "hQNoSeeds": "Why can't it find my seed?",
        "hANoSeeds": "One mistake in the data you enter will be enough to stop MeteoNook from finding the correct seed. This tends to happen with weather types, as it's easy to mix them up. If you're not completely sure, then select the appropriate \"not sure\" option. It doesn't narrow down the options as quickly as selecting a specific type, but it's less risky - a slow but correct result is better than no result!",
        "hQBadSeed": "It gave me a seed, but the results are wrong!",
        "hABadSeed": "This happens sometimes, it sucks. What's most likely happened is that there was a mistake somewhere in your data and MeteoNook has found a seed which fits what you asked for, but doesn't actually match what your island uses. Try changing your weather types to \"not sure\", just in case it's a mistake with cloud types. If that doesn't help, you may have to collect new data.",
        "hQAdd": "Will you add X...?",
        "hAAdd": "Maybe. No promises.",
        "hQDonate": "Can I give you money?",
        "hADonate": "Since a few people asked me on Discord and Twitter, I've added some links to the footer. Please don't feel obligated to do so, though!",
        "hQSource": "Will this be open source?",
        "hASource": "No plans at the moment. I'm reluctant to share any more open code/tools because of the amount of projects that are building off my work (and even making money in some cases) without even respecting my request to be credited.",
        "sIntro": "Before you can forecast your island's weather, you'll need to determine what weather seed it has. This tool will find it for you once you've provided enough data about your island's weather. The more information you provide, the easier it will be!",
        "sTTypes": "Weather Types",
        "sTypes1": "Each hour in Animal Crossing has a type of weather - clear \u2600\ufe0f, sunny \ud83c\udf24, cloudy \ud83c\udf25\ufe0f\ufe0f, rain clouds \u2601, rain/snow \ud83c\udf27 and heavy rain/snow \u26c8\ufe0f. If you know what type you have in a particular hour, then add it in this section.",
        "sTypes2": "<p>Clouds are easiest to identify at the start of the hour (X:00), so if the sky is fully clear at 13:00, then 13H is definitely <b>clear \u2600\ufe0f</b>. At 13:30, the weather will be a mix of the 13H weather and the 14H weather.</p><p>Rain and snow last for the whole hour, so if you see rain at any point between 13H and 14H, then 13H is definitely <b>rain/snow \ud83c\udf27</b> or <b>heavy rain/snow \u26c8\ufe0f</b>.</p><p>If you're not sure about the cloud type within a given hour, you can pick 'Not sure (no rain/snow)' or 'Not sure (rain/snow)'.</p><p>You don't need to enter these on days where you've seen a heavy shower, rainbow or aurora borealis, because that information is good enough to pin down that day's pattern perfectly.</p>",
        "sTStars": "Shooting Star Times",
        "sStars": "<p>If you note down the exact in-game time (hour and minute) when shooting stars have appeared during a meteor shower, then this information will help the process. You will always get 5 or 8 shooting stars in a minute where they appear.</p><p>If you're sure that there are no stars in a specific time period, you can add it to the Gaps section to help the algorithm out. The <b>Make from Times</b> button will automatically create gaps between every time you've put in.</p><p>By clicking <b>Edit Seconds</b>, you can add down-to-the-second times for each star. This is a very good way to find your seed quickly, but it can be very difficult to get the timing correct as the in-game clock doesn't show seconds.</p><p><b>Heavy showers</b> will give you 5 or 8 stars a minute, very frequently (every other minute on average), between 19H and 04H. <b>Light showers</b> will give you 5 stars a minute, in very rare bursts.</p>",
        "sTTips": "Tips",
        "sTips": "<ul><li>Don't put info in if you're not completely sure about it</li><li>Look through screenshots and videos you've taken in AC:NH for records of your weather. In the Switch album, you can press A to see the date and time they were taken. You may be able to get more accurate times by transferring them to a microSD card and reading them from your computer.</li><li>\u26a0\ufe0f Be careful with times on screenshots of shooting stars. If a star appears at 19:43:58 and you take a screenshot three seconds later, it will be tagged 19:44 even though the star was in the minute prior!</li><li>\u26a0\ufe0f Days in Animal Crossing start and end at <b>05H</b>, so if you log weather or shooting stars after midnight, make sure you put them on the same calendar date as the ones before midnight.</li></ul>",
        "tStep1": "Step 1: Enter your Information",
        "tNorthernHemi": "Northern hemisphere",
        "tSouthernHemi": "Southern hemisphere",
        "tnorthern": "northern",
        "tsouthern": "southern",
        "tSpecialDay": "\u26a0\ufe0f Careful: In the {hemi} hemisphere, this day is <b>{day}</b>!{warn}",
        "tSpDayWarnEv": " This forces the EventDay00 weather pattern if you have the event unlocked.",
        "tSpDayWarnRS": " This forces the EventDay00 weather pattern if you have Resident Services upgraded.",
        "tSpDayWarn": " This forces the EventDay00 weather pattern.",
        "tResetBlurb": "Your pattern data will automatically be saved to your browser, so you can close the page and come back later. Click here to start over:",
        "tResetButton": "Reset Data",
        "tTPatterns": "Special Patterns",
        "tNoData": "No data, or not sure",
        "tShower": "Meteor shower or visit from Celeste",
        "tRainbow": "Rainbow",
        "tAurora": "Aurora borealis",
        "tNone": "None of the above",
        "tTShower": "Meteor Shower Info",
        "tHeavy": "Heavy shower (mentioned by Isabelle or villagers, 5-8 stars a minute)",
        "tLight": "Light shower (5 stars a minute, coming in rare bursts)",
        "tNotSure": "Not sure",
        "tTTimes": "Times when stars appeared",
        "tEditSeconds": "Edit Seconds",
        "tAddTime": "Add Time",
        "tTGaps": "Gaps with no stars",
        "tTo": "to",
        "tAddGap": "Add Gap",
        "tMakeFromTimes": "Make from times",
        "tTTypes": "Weather Types",
        "tAddType": "Add Type",
        "tPatterns": "Possible patterns:",
        "tPatternsNone": "<span class='text-danger'>none</span>. Double-check your info!",
        "tTRainbow": "Rainbow Info",
        "tTime": "Time",
        "tDoubleRainbow": "Double rainbow \ud83c\udf08\ud83c\udf08",
        "tTAurora": "Aurora Info",
        "tAuroraFit": "Which of these patterns fit?",
        "tStep2": "Step 2: Find your Seed",
        "tStart": "Start Search",
        "tCancel": "Cancel Search",
        "tWorking": "Searching...",
        "tInfoDefault": "Once you've filled in the information above, click Start Search to begin the process.",
        "tInfoRunning": "Searching, hold on...",
        "tInfoRunningC": "Searching, hold on... Found {seeds} so far:",
        "tInfoPossibleSeeds": "1 possible seed | {n} possible seeds",
        "tInfoMoreData": "You haven't entered enough weather information to narrow down your island's seed.",
        "tInfoNoSeeds": "There are no seeds that match the information you entered. Please double-check it!",
        "tInfoMultiSeed": "It looks like there are {count} seeds that fit the information you've given: {seedValues}. You can look at these by putting them into Step 3 below to see how they compare to your island, or you can add more data above and try searching again.",
        "tInfoSeed": "Your island's weather seed is <b>{seed}</b>. Write it down somewhere for safekeeping, and move onto Step 3!",
        "tStarConflict": "You have a gap saying that at {time} on {date}, there both is and isn't a star. Please fix it!",
        "tBadRainbowN": "You said {date} has a rainbow, but that can't happen in the northern hemisphere - they begin on the 25th February and end on the 25th November.",
        "tBadRainbowS": "You said {date} has a rainbow, but that can't happen in the southern hemisphere - they begin on the 25th August and end on the 25th May.",
        "tBadAuroraN": "You said {date} has the aurora borealis, but that can't happen in the northern hemisphere - it begins on the 11th December and ends on the 24th February.",
        "tBadAuroraS": "You said {date} has the aurora australis, but that can't happen in the southern hemisphere - it begins on the 11th June and ends on the 24th August.",
        "tStep3": "Step 3: Forecast Settings",
        "tForecastBlurb": "<p>The information here controls what shows up on your forecasts, and will be saved in this page's URL so you can just bookmark it.</p><p>The island name is purely cosmetic and won't affect your reports. Fill it in if you want. Or just set it to something random. I don't care.</p>",
        "tIslandName": "Island",
        "tSeed": "Seed",
        "tHemisphere": "Hemisphere",
        "tNorthern": "Northern",
        "tSouthern": "Southern",
        "tSave": "Save",
        "tsTitle": "Editing star at {time}",
        "tsHeader": "During a heavy shower you get 5 or 8 stars in a minute, and during a light shower, you get 5 stars in a minute. If you know the exact seconds for each star, enter them below.",
        "tsStar": "Star {n}",
        "tsFooter": "<p>This is very powerful, but be careful - it's difficult to get these right! You may want to take a video of your Switch (e.g. with your phone) with the in-game clock and the sky visible while shooting stars are falling. Watch it afterwards and note the times when the in-game clock changes and when stars appear, then compare them to find the seconds for each star.</p><p>The search algorithm allows your measurements to be up to <b>2 seconds late</b>.</p>",
        "tsCancel": "Cancel",
        "tsSave": "Save",
        "yLight": "\u2728 1 light shower | \u2728 {n} light showers",
        "yHeavy": "\ud83c\udf20 1 heavy shower | \ud83c\udf20 {n} heavy showers",
        "yRainbow": "\ud83c\udf08 1 rainbow | \ud83c\udf08 {n} rainbows",
        "yRainbowDouble": "({n} double)",
        "yAuroraN": "\ud83c\udf0c 1 aurora borealis day | \ud83c\udf0c {n} aurora borealis days",
        "yAuroraS": "\ud83c\udf0c 1 aurora australis day | \ud83c\udf0c {n} aurora australis days",
        "dTitlePreview": "Preview of pattern {pattern}",
        "dTitleDay": "Weather for {date} ({pattern})",
        "dSpDay": "\ud83c\udf89 This day has special weather because of {day}",
        "dWindTooltip": "Wind strength",
        "dHeavyFog": "\ud83c\udf2b Heavy fog",
        "dWaterFog": "\ud83c\udf2b Water fog",
        "dRainbowSingle": "\ud83c\udf08 Rainbow!",
        "dRainbowDouble": "\ud83c\udf08\ud83c\udf08 Double rainbow!",
        "dRainbowEither": "\ud83c\udf08 Rainbow or double rainbow",
        "dAuroraN": "\ud83c\udf0c Aurora borealis!",
        "dAuroraS": "\ud83c\udf0c Aurora australis!",
        "dStars": "\ud83c\udf20 Stars possible!",
        "dunno": "Don't know",
        "lstWeekdays0": "Sun",
        "lstWeekdays1": "Mon",
        "lstWeekdays2": "Tue",
        "lstWeekdays3": "Wed",
        "lstWeekdays4": "Thu",
        "lstWeekdays5": "Fri",
        "lstWeekdays6": "Sat",
        "lstMonths0": "January",
        "lstMonths1": "February",
        "lstMonths2": "March",
        "lstMonths3": "April",
        "lstMonths4": "May",
        "lstMonths5": "June",
        "lstMonths6": "July",
        "lstMonths7": "August",
        "lstMonths8": "September",
        "lstMonths9": "October",
        "lstMonths10": "November",
        "lstMonths11": "December",
        "lstSpecialDays0": "Bunny Day",
        "lstSpecialDays1": "Fishing Tourney",
        "lstSpecialDays2": "Bug-Off",
        "lstSpecialDays3": "New Year's Eve Countdown",
        "lstSpecialDaysA0": "Bunny Day",
        "lstSpecialDaysA1": "the Fishing Tourney",
        "lstSpecialDaysA2": "the Bug-Off",
        "lstSpecialDaysA3": "the New Year's Eve Countdown",
        "lstPatternChoices0": "\u2600 Clear/Fine",
        "lstPatternChoices1": "\ud83c\udf24 Sunny",
        "lstPatternChoices2": "\ud83c\udf25 Cloudy",
        "lstPatternChoices3": "\u2601 Rain Clouds",
        "lstPatternChoices4": "\ud83c\udf27 Rain/Snow",
        "lstPatternChoices5": "\u26c8 Heavy Rain/Snow",
        "lstPatternChoices6": "Unsure (no rain/snow)",
        "lstPatternChoices7": "Unsure (rain/snow)",
        "lstPatternNoSnow0": "\u2600 Clear/Fine",
        "lstPatternNoSnow1": "\ud83c\udf24 Sunny",
        "lstPatternNoSnow2": "\ud83c\udf25 Cloudy",
        "lstPatternNoSnow3": "\u2601 Rain Clouds",
        "lstPatternNoSnow4": "\ud83c\udf27 Rain",
        "lstPatternNoSnow5": "\u26c8 Heavy Rain",
        "lstPatternSnow0": "\u2600 Clear/Fine",
        "lstPatternSnow1": "\ud83c\udf24 Sunny",
        "lstPatternSnow2": "\ud83c\udf25 Cloudy",
        "lstPatternSnow3": "\u2601 Rain Clouds",
        "lstPatternSnow4": "\ud83c\udf28 Snow",
        "lstPatternSnow5": "\ud83c\udf28 Heavy Snow",
        "credTitle": "Credits",
        "credThank1": "Special thanks to the following people for their help:",
        "credThank1a": "Testing and suggestions:",
        "credThank1b": "Translations:",
        "credThank2": "MeteoNook includes parts of the following software:",
        "credThank3": "Shoutouts to:",
        "footerCopy": "MeteoNook is &copy; Ash Wolf (<a href='https://twitter.com/_Ninji'>@_Ninji</a>), 2020. Not affiliated with or endorsed by Nintendo.",
        "footerDonate": "Want to support me?"
    },
    "es": {
        "lang": "Espa\u00f1ol",
        "title": "MeteoNook para {island}",
        "hTab": "Inicio",
        "sTab": "Semilla",
        "yTab": "Anual",
        "mTab": "Mensual",
        "hTWelcome": "Bienvenido a MeteoNook Alpha",
        "hWelcome": "<p>MeteoNook predice el tiempo para <i>Animal Crossing: New Horizons</i> en sus versiones 1.2.0 y 1.2.1.</p><p>Esta herramienta te dar\u00e1 pron\u00f3sticos para los patrones que sigue el clima en tu isla, incluyendo tiempos exactos para las lluvias de meteoritos, los arco\u00edris y la aurora. Para comenzar, necesitar\u00e1s la semilla ambiental, un numero que pertenece a tu isla y que influye el sistema. Sigue los pasos en la pesta\u00f1a <b>Semilla</b> para encontrarlo.</p>",
        "hTLog": "Actualizaciones",
        "hLog20200610": "Primera versi\u00f3n de pruebas",
        "hLog20200611": "A\u00f1adido: B\u00fasquedas con tiempos al segundo y arco\u00edris/aurora, previsiones de niebla, bordes en las semanas y algunas cosas mas que he olvidado",
        "hLog20200612": "Corregido: Los c\u00e1lculos del horario de meteoritos y la velocidad del viento a partir de la medianoche en los \u00faltimos dos d\u00edas del a\u00f1o",
        "hLog20200613": "Corregido: Un error en que las b\u00fasquedas con horario de meteoritos incluyendo segundos no cuadraban con ninguna semilla",
        "hLog20200614": "Corregido: Las opciones de aurora no se actualizaban correctamente. El patr\u00f3n para el evento de la Caza del Huevo esta ahora restringido al 2020. A\u00f1adido: Muestra de 'patrones posibles' a la pesta\u00f1a Semilla, advertencias para d\u00edas con patrones de evento, y opci\u00f3n para mostrar tiempos en el sistema de 12 horas para los americanos.",
        "hLog20200615": "A\u00f1adido: Soporte para traducciones, y una traducci\u00f3n a espa\u00f1ol.",
        "hLog20200616": "Corregido: Un error en que los huecos en el horario de meteoritos no pod\u00edan acabar en el ultimo minuto de la hora (X:59).",
        "hTFAQ": "Preguntas frecuentes",
        "hQSeed": "\u00bfCambiar\u00e1 mi semilla si viajo en el tiempo?",
        "hASeed": "No. La semilla se determina cuando entras en tu isla por primera vez, y nunca cambia.",
        "hQCeleste": "\u00bfD\u00f3nde esta Estela?",
        "hACeleste": "Cada semana, el juego escoge un d\u00eda con lluvia de meteoritos para que Estela aparezca. Esta selecci\u00f3n es al azar, no pertenece a la semilla ambiental, y no se puede prever.",
        "hQMoreData": "\u00bfPor qu\u00e9 me pide mas datos?",
        "hAMoreData": "<p>Hay m\u00e1s de 2 billones de semillas, pero solo una vale para tu isla. MeteoNook hace pruebas con cada semilla, calcula el tiempo que dar\u00eda, y lo compara con los datos que t\u00fa introduces. Si no coincide (por ejemplo, dijiste que tuviste lluvia a cierta hora, pero la semilla dar\u00eda sol) la semilla ser\u00e1 descartada.</p><p>En nuestras pruebas, hemos tenido suerte con estas combinaciones...</p><ul><li>Las fechas para entre 5 y 7 lluvias fuertes de meteoritos</li><li>Los horarios (con hora y minuto) para meteoritos en una lluvia leve, entre 1 a 3 horas</li><li> Los horarios (con hora, minuto y segundo) para unos cuantos meteoritos distintos en una lluvia leve</li><li>Las fechas y horarios para entre 5 y 7 arco\u00edris</li></ul><p>Pero m\u00e1s all\u00e1 de eso, el sistema ambiental es muy aleatorio. Puedes tener suerte y encontrar tu semilla con menos informaci\u00f3n, o puedes necesitar m\u00e1s.</p>",
        "hQNoSeeds": "\u00bfPor qu\u00e9 no encuentra mi semilla?",
        "hANoSeeds": "Un error en los datos que introduces es suficiente para que MeteoNook no pueda encontrar la semilla correcta. Esto suele pasar con los tipos del tiempo, porque es f\u00e1cil confundir uno con otro. Si no est\u00e1s completamente seguro, elige la opci\u00f3n \"No estoy seguro\" en la secci\u00f3n correspondiente. No elimina tantas opciones como si eligieras un tipo especifico, pero tiene menos riesgo - \u00a1un resultado correcto y lento es mejor que ning\u00fan resultado!",
        "hQBadSeed": "Me ha dado una semilla, \u00a1pero el pron\u00f3stico est\u00e1 mal!",
        "hABadSeed": "Esto pasa de vez en cuando. Lo m\u00e1s probable es que haya un error en tus datos y MeteoNook haya encontrado una semilla que encaja con tus datos, pero en verdad no es la semilla que tu isla tiene. Intenta cambiar los tipos del tiempo a \"no estoy seguro\", por si acaso es un error en los tipos de nubes. Si no ayuda, quiz\u00e1s tengas que obtener nuevos datos.",
        "hQAdd": "\u00bfVas a a\u00f1adir X...?",
        "hAAdd": "Tal vez. No prometo nada.",
        "hQDonate": "\u00bfPuedo darte dinero?",
        "hADonate": "Ya que alguna gente me pregunt\u00f3 en Discord y en Twitter, he puesto unos enlaces al final de la p\u00e1gina. \u00a1Pero ten en cuenta que no hay obligaci\u00f3n de nada!",
        "hQSource": "\u00bfVas publicar el c\u00f3digo fuente?",
        "hASource": "Por ahora, no est\u00e1 en mis planes. No estoy muy dispuesto a compartir m\u00e1s c\u00f3digo abierto porque hay muchos proyectos que est\u00e1n usando mi trabajo (y hasta ganando dinero) sin agradecimiento o enlace, que es lo \u00fanico que pido para su uso.",
        "sIntro": "Para obtener previsiones en tu isla, tendr\u00e1s que determinar la semilla ambiental. Esta herramienta te ayudar\u00e1 a encontrarla con los datos que introduces sobre el tiempo en tu isla. Cuanta m\u00e1s informaci\u00f3n, \u00a1m\u00e1s f\u00e1cil ser\u00e1!",
        "sTTypes": "Tipos de tiempo",
        "sTypes1": "Cada hora en Animal Crossing tiene asociado un tipo de tiempo - claro \u2600\ufe0f, soleado \ud83c\udf24, nublado \ud83c\udf25\ufe0f\ufe0f, nube de lluvia \u2601, lluvia/nieve \ud83c\udf27 y lluvia/nieve fuerte \u26c8\ufe0f. Si sabes qu\u00e9 tipo tienes a una cierta hora, a\u00f1\u00e1delo en esta secci\u00f3n.",
        "sTypes2": "<p>Las nubes son m\u00e1s f\u00e1ciles de identificar al comienzo de la hora (X:00), as\u00ed que si el cielo esta completamente claro a las 13:00, puedes estar seguro de que 13H es <b>claro \u2600\ufe0f</b>. A las 13:30, el tiempo ser\u00e1 una mezcla entre el tiempo de las 13H y el tiempo de las 14H.</p><p>Lluvia y nieve duran por la hora entera, as\u00ed que si ves lluvia en cualquier punto entre las 13H y las 14H, sabes que el tiempo a las 13H es <b>lluvia/nieve \ud83c\udf27</b> o <b>lluvia/nieve fuerte \u26c8\ufe0f</b>.</p><p>Si no est\u00e1s seguro de qu\u00e9 tipo de nubes tienes, puedes elegir 'No estoy seguro (no hay lluvia o nieve)' o 'No estoy seguro (lluvia o nieve)'.</p><p>No necesitas esta informaci\u00f3n en d\u00edas en que has visto una lluvia fuerte de meteoritos, un arco\u00edris o la aurora, porque esos temas son bastante para adivinar el patr\u00f3n del d\u00eda sin margen de error.</p>",
        "sTStars": "Horario de Meteoritos",
        "sStars": "<p>Si apuntas el tiempo exacto (hora y minuto) seg\u00fan el reloj del juego en que aparecen unos meteoritos, estos datos te ayudar\u00e1n a encontrar tu semilla. En cada minuto con meteoritos, siempre habr\u00e1n 5 u 8.</p><p>Si est\u00e1s seguro de que no aparecen meteoritos en un periodo de tiempo, puedes a\u00f1adirlo a la secci\u00f3n de Huecos para ayudar al proceso. El bot\u00f3n <b>Hacer del horario</b> crear\u00e1 huecos entre los meteoritos que ya has puesto.</p><p>Si haces clic en <b>Segundos</b>, puedes poner tiempos precisos hasta el segundo para cada meteorito. Es una manera muy eficaz de buscar tu semilla, pero tambi\u00e9n es muy dif\u00edcil determinar los tiempos porque el reloj en el juego no muestra los segundos.</p><p>Las <b>lluvias fuertes</b> te dar\u00e1n 5 u 8 meteoritos cada minuto, con alta frecuencia (en el 50% de los minutos, de media), entre las 19H y las 04H. Las <b>lluvias leves</b> te dar\u00e1n 5 meteoritos cada minuto, con muy baja frecuencia.</p>",
        "sTTips": "Sugerencias",
        "sTips": "<ul><li>No introduzcas informaci\u00f3n si no est\u00e1s completamente seguro.</li><li>Mira los pantallazos y v\u00eddeos que has grabado en AC:NH para obtener el hist\u00f3rico del tiempo. En las fotos de Switch, puedes pulsar A para ver la fecha y la hora en que se grabaron. Tal vez puedes obtener tiempos mas precisos si las pasas a una tarjeta microSD y miras los archivos en tu ordenador.</li><li>\u26a0\ufe0f Ten cuidado con los tiempos en pantallazos de meteoritos. Si aparece un meteorito a las 19:43:58 y tomas un pantallazo a los 3 segundos, tendr\u00e1 la hora 19:44 aunque el meteorito estaba en el minuto anterior.</li><li>\u26a0\ufe0f Los d\u00edas en Animal Crossing comienzan y acaban a las <b>05H</b>, as\u00ed que si grabas tiempo o meteoritos a partir de la medianoche y antes de las 05H, aseg\u00farate de que los pones en la misma fecha que los que grabaste antes de la medianoche.</li></ul>",
        "tStep1": "Paso 1: Introduce tu informaci\u00f3n",
        "tNorthernHemi": "Hemisferio norte",
        "tSouthernHemi": "Hemisferio sur",
        "tnorthern": "norte",
        "tsouthern": "sur",
        "tSpecialDay": "\u26a0\ufe0f Aviso: En el hemisferio {hemi}, este d\u00eda es <b>{day}</b>!{warn}",
        "tSpDayWarnEv": " Esto fuerza el patr\u00f3n EventDay00 si tienes este evento activo.",
        "tSpDayWarnRS": " Esto fuerza el patr\u00f3n EventDay00 si has reformado la oficina de gesti\u00f3n vecinal.",
        "tSpDayWarn": " Esto fuerza el patr\u00f3n EventDay00.",
        "tResetBlurb": "Tus datos de patr\u00f3n se guardar\u00e1n autom\u00e1ticamente en tu navegador, as\u00ed que puedes cerrar la pagina y volver despu\u00e9s. Haz clic aqu\u00ed para empezar de nuevo:",
        "tResetButton": "Borrar datos",
        "tTPatterns": "Patrones especiales",
        "tNoData": "No tengo datos, o no estoy seguro",
        "tShower": "Lluvia de meteoritos o visita de Estela",
        "tRainbow": "Arco\u00edris",
        "tAurora": "Aurora boreal",
        "tNone": "Ninguno de estos",
        "tTShower": "Informaci\u00f3n de meteoritos",
        "tHeavy": "Lluvia fuerte (anunciado por Canela o tus vecinos, 5-8 meteoritos por minuto)",
        "tLight": "Lluvia leve (5 meteoritos cada minuto, con muy baja frecuencia)",
        "tNotSure": "No estoy seguro",
        "tTTimes": "Horario de meteoritos",
        "tEditSeconds": "Editar segundos",
        "tAddTime": "A\u00f1adir hora",
        "tTGaps": "Huecos sin meteoritos",
        "tTo": "hasta",
        "tAddGap": "A\u00f1adir un hueco",
        "tMakeFromTimes": "Crear a partir del horario",
        "tTTypes": "Tipos de tiempo",
        "tAddType": "A\u00f1adir un tipo",
        "tPatterns": "Patrones posibles:",
        "tPatternsNone": "<span class='text-danger'>ninguno</span>. \u00a1Comprueba tus datos!",
        "tTRainbow": "Informaci\u00f3n de arco\u00edris",
        "tTime": "Tiempo",
        "tDoubleRainbow": "Arco\u00edris doble \ud83c\udf08\ud83c\udf08",
        "tTAurora": "Informaci\u00f3n de la aurora",
        "tAuroraFit": "\u00bfCu\u00e1l de estos patrones encaja?",
        "tStep2": "Paso 2: Encuentra tu semilla",
        "tStart": "Comenzar b\u00fasqueda",
        "tCancel": "Cancelar b\u00fasqueda",
        "tWorking": "Buscando...",
        "tInfoDefault": "Cuando hayas rellenado los datos, haz clic en 'Comenzar b\u00fasqueda' para... comenzar la b\u00fasqueda.",
        "tInfoRunning": "Buscando, espera...",
        "tInfoRunningC": "Buscando, espera... {seeds} encontrada:",
        "tInfoPossibleSeeds": "1 semilla posible | {n} semillas posibles",
        "tInfoMoreData": "Estos datos no son suficientes para determinar la semilla ambiental en tu isla.",
        "tInfoNoSeeds": "No hay semillas que encajen con los datos que has puesto. \u00a1Compru\u00e9balos, por favor!",
        "tInfoMultiSeed": "Parece que hay {count} semillas que encajan con la informaci\u00f3n que has puesto: {seedValues}. Si quieres comprobarlas, puedes introducir cada una en el paso 3 para ver c\u00f3mo se comparan con el tiempo en tu isla. Si no, a\u00f1ade m\u00e1s datos en este paso e intenta buscar otra vez.",
        "tInfoSeed": "La semilla ambiental en tu isla es <b>{seed}</b>. Ap\u00fantala en alg\u00fan lado para no perderla, \u00a1y sigue al 3\u00ba paso!",
        "tStarConflict": "Tienes un hueco diciendo que a las {time} del {date} hubo y no hubo un meteorito. \u00a1Arregla eso!",
        "tBadRainbowN": "Dijiste que el {date} hubo un arco\u00edris, pero esto no puede pasar en el hemisferio norte - aparecen desde el 25 de febrero hasta el 25 de noviembre.",
        "tBadRainbowS": "Dijiste que el {date} hubo un arco\u00edris, pero esto no puede pasar en el hemisferio sur - aparecen desde el 25 de agosto hasta el 25 de mayo.",
        "tBadAuroraN": "Dijiste que el {date} hubo una aurora, pero esto no puede pasar en el hemisferio norte - aparecen desde el 11 de diciembre hasta el 24 de febrero.",
        "tBadAuroraS": "Dijiste que el {date} hubo una aurora, pero esto no puede pasar en el hemisferio sur - aparecen desde el 11 de junio hasta el 24 de agosto.",
        "tStep3": "Paso 3: Opciones del pron\u00f3stico",
        "tForecastBlurb": "<p>La informaci\u00f3n aqu\u00ed influye en lo que aparece en las pesta\u00f1as de previsi\u00f3n, y ser\u00e1 guardada en el enlace para que puedas a\u00f1adirlo a tus marcadores.</p><p>El nombre de la isla es est\u00e9tico y no afecta a tus previsiones. Ponlo si quieres. O pon lo que quieras. No me importa, sigue tu coraz\u00f3n.</p>",
        "tIslandName": "Isla",
        "tSeed": "Semilla ambiental",
        "tHemisphere": "Hemisferio",
        "tNorthern": "Norte",
        "tSouthern": "Sur",
        "tSave": "Guardar",
        "tsTitle": "Meteorito a las {time}",
        "tsHeader": "Durante una lluvia fuerte, habr\u00e1 5 u 8 meteoritos en un minuto, y durante una lluvia leve pasar\u00e1n 5 meteoritos en un minuto. Si sabes los segundos en que cada meteorito apareci\u00f3, ponlo aqu\u00ed.",
        "tsStar": "Meteorito {n}",
        "tsFooter": "<p>Esta opci\u00f3n tiene mucho potencial, pero ten cuidado - \u00a1es dif\u00edcil hacerlo bien! Puedes grabar un v\u00eddeo de tu Switch (con tu m\u00f3vil, por ejemplo) con el cielo y el reloj del juego cuando hay meteoritos. Si despu\u00e9s reproduces el video y apuntas el tiempo en que el reloj cambia y el tiempo en que aparecen los meteoritos, podr\u00e1s compararlos y determinar cu\u00e1ndo aparecen.</p><p>El algoritmo de b\u00fasqueda permite que tus mediciones tengan <b>hasta 2 segundos de retraso</b>.</p>",
        "tsCancel": "Cancelar",
        "tsSave": "Guardar",
        "yLight": "\u2728 1 lluvia leve de meteoritos | \u2728 {n} lluvias leves de meteoritos",
        "yHeavy": "\ud83c\udf20 1 lluvia fuerte de meteoritos | \ud83c\udf20 {n} lluvias fuertes de meteoritos",
        "yRainbow": "\ud83c\udf08 {n} arco\u00edris",
        "yRainbowDouble": "({n} double)",
        "yAuroraN": "\ud83c\udf0c 1 d\u00eda con aurora | \ud83c\udf0c {n} d\u00edas con aurora",
        "yAuroraS": "\ud83c\udf0c 1 d\u00eda con aurora | \ud83c\udf0c {n} d\u00edas con aurora",
        "dTitlePreview": "Ejemplo del patr\u00f3n {pattern}",
        "dTitleDay": "El tiempo para {date} ({pattern})",
        "dSpDay": "\ud83c\udf89 Este d\u00eda hace un tiempo especial porque se celebra {day}",
        "dWindTooltip": "Velocidad del viento",
        "dHeavyFog": "\ud83c\udf2b Niebla sobre la isla",
        "dWaterFog": "\ud83c\udf2b Niebla sobre el agua",
        "dRainbowSingle": "\ud83c\udf08 \u00a1Arco\u00edris!",
        "dRainbowDouble": "\ud83c\udf08\ud83c\udf08 \u00a1Arco\u00edris doble!",
        "dRainbowEither": "\ud83c\udf08 Arco\u00edris o arco\u00edris doble",
        "dAuroraN": "\ud83c\udf0c \u00a1Aurora boreal!",
        "dAuroraS": "\ud83c\udf0c \u00a1Aurora austral!",
        "dStars": "\ud83c\udf20 \u00a1Meteoritos posibles!",
        "dunno": "No s\u00e9",
        "lstWeekdays0": "Dom",
        "lstWeekdays1": "Lun",
        "lstWeekdays2": "Mar",
        "lstWeekdays3": "Mi\u00e9",
        "lstWeekdays4": "Jue",
        "lstWeekdays5": "Vie",
        "lstWeekdays6": "S\u00e1b",
        "lstMonths0": "Enero",
        "lstMonths1": "Febrero",
        "lstMonths2": "Marzo",
        "lstMonths3": "Abril",
        "lstMonths4": "Mayo",
        "lstMonths5": "Junio",
        "lstMonths6": "Julio",
        "lstMonths7": "Agosto",
        "lstMonths8": "Septiembre",
        "lstMonths9": "Octubre",
        "lstMonths10": "Noviembre",
        "lstMonths11": "Diciembre",
        "lstSpecialDays0": "la Caza del Huevo",
        "lstSpecialDays1": "el Torneo de Pesca",
        "lstSpecialDays2": "la Caza de Bichos",
        "lstSpecialDays3": "Nochevieja",
        "lstSpecialDaysA0": "la Caza del Huevo",
        "lstSpecialDaysA1": "el Torneo de Pesca",
        "lstSpecialDaysA2": "la Caza de Bichos",
        "lstSpecialDaysA3": "Nochevieja",
        "lstPatternChoices0": "\u2600 Claro",
        "lstPatternChoices1": "\ud83c\udf24 Soleado",
        "lstPatternChoices2": "\ud83c\udf25 Nublado",
        "lstPatternChoices3": "\u2601 Nubes de lluvia",
        "lstPatternChoices4": "\ud83c\udf27 Lluvia/nieve",
        "lstPatternChoices5": "\u26c8 Lluvia/nieve fuerte",
        "lstPatternChoices6": "No estoy seguro (sin lluvia o nieve)",
        "lstPatternChoices7": "No estoy seguro (lluvia o nieve)",
        "lstPatternNoSnow0": "\u2600 Claro",
        "lstPatternNoSnow1": "\ud83c\udf24 Soleado",
        "lstPatternNoSnow2": "\ud83c\udf25 Nublado",
        "lstPatternNoSnow3": "\u2601 Nubes de lluvia",
        "lstPatternNoSnow4": "\ud83c\udf27 Lluvia",
        "lstPatternNoSnow5": "\u26c8 Lluvia fuerte",
        "lstPatternSnow0": "\u2600 Claro",
        "lstPatternSnow1": "\ud83c\udf24 Soleado",
        "lstPatternSnow2": "\ud83c\udf25 Nublado",
        "lstPatternSnow3": "\u2601 Nubes de lluvia",
        "lstPatternSnow4": "\ud83c\udf28 Nieve",
        "lstPatternSnow5": "\ud83c\udf28 Nieve fuerte",
        "credTitle": "Agradecimientos",
        "credThank1": "Muchas gracias a los siguientes usuarios por su ayuda:",
        "credThank1a": "Pruebas y sugerencias:",
        "credThank1b": "Traducciones:",
        "credThank2": "MeteoNook incluye componentes de este software:",
        "credThank3": "Adem\u00e1s, gracias a:",
        "footerCopy": "MeteoNook es &copy; de Ash Wolf (<a href='https://twitter.com/_Ninji'>@_Ninji</a>), 2020. Esta web no esta asociada con ni avalada por Nintendo.",
        "footerDonate": "\u00bfQuieres apoyarme?"
    }
}