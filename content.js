// CATHOLIC USL - CONTENT FILE
// To add a real sign video: upload the MP4 into the "videos" folder on GitHub,
// then change   video: null   to   video: "videos/our-father.mp4"
// For a YouTube video use   youtube: "VIDEO_ID"   (the part after youtu.be/ and before ?si=)
// Words for readers: add   translations: { Luganda: "...", Kiswahili: "..." }   to any item (English uses "text").
// Status values: "placeholder" (no real review yet) | "usl-reviewed" | "approved"
// Nothing here is approved doctrine until the review team signs it off.

window.CONTENT = {
  items: [
    { id: "sign-of-cross", cat: "Prayers", title: "The Sign of the Cross", status: "placeholder", video: null,
      desc: "The prayer that begins and ends our prayer.",
      text: "In the name of the Father, and of the Son, and of the Holy Spirit. Amen.",
      points: ["We begin and end prayer with the Sign of the Cross.", "We name the Father, the Son and the Holy Spirit.", "Amen means \"so be it\"."],
      quiz: [
        { q: "Which three Persons do we name in the Sign of the Cross?", a: ["Father, Son and Holy Spirit", "Mary, Joseph and Jesus", "Peter, Paul and John"], c: 0, e: "We name the Father, the Son and the Holy Spirit: one God in three Persons." },
        { q: "Which word ends the prayer?", a: ["Amen", "Glory", "Alleluia"], c: 0, e: "Amen means \"so be it\"." } ] },
    { id: "our-father", cat: "Prayers", title: "The Lord's Prayer (Our Father)", status: "placeholder", video: null,
      desc: "The prayer Jesus taught His disciples.",
      text: "Our Father, who art in heaven, hallowed be thy name; thy kingdom come; thy will be done on earth as it is in heaven. Give us this day our daily bread; and forgive us our trespasses as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen.",
      points: ["Jesus taught this prayer to His disciples.", "We call God our Father.", "We ask for daily bread, forgiveness and protection."],
      quiz: [
        { q: "Who taught the Lord's Prayer?", a: ["Jesus", "Moses", "Peter"], c: 0, e: "Jesus taught it when His disciples asked Him how to pray." },
        { q: "What do we ask for in the Lord's Prayer?", a: ["Daily bread and forgiveness", "Money and fame", "Nothing at all"], c: 0, e: "We ask for what we need each day, for forgiveness, and for protection from evil." } ] },
    { id: "hail-mary", cat: "Prayers", title: "Hail Mary", status: "placeholder", video: null,
      desc: "A prayer to Mary, mother of Jesus.",
      text: "Hail Mary, full of grace, the Lord is with thee. Blessed art thou amongst women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.",
      points: ["We greet Mary, the mother of Jesus.", "We ask Mary to pray for us.", "The prayer ends with Amen."],
      quiz: [
        { q: "Who do we speak to in the Hail Mary?", a: ["Mary", "Moses", "An angel"], c: 0, e: "The Hail Mary greets Mary, the mother of Jesus." },
        { q: "What do we ask Mary to do?", a: ["Pray for us", "Give us gifts", "Sing for us"], c: 0, e: "Catholics ask Mary to pray with us and for us." } ] },
    { id: "glory-be", cat: "Prayers", title: "Glory Be", status: "placeholder", video: null,
      desc: "A short prayer of praise to the Trinity.",
      text: "Glory be to the Father, and to the Son, and to the Holy Spirit, as it was in the beginning, is now, and ever shall be, world without end. Amen.",
      points: ["A short prayer of praise.", "It praises the Father, the Son and the Holy Spirit."],
      quiz: [ { q: "The Glory Be is a prayer of...", a: ["Praise", "Complaint", "Announcement"], c: 0, e: "It gives glory to God: Father, Son and Holy Spirit." } ] },
    { id: "gospel-sample", cat: "Scripture", title: "Sunday Gospel (sample)", status: "placeholder", video: null,
      desc: "Matthew 22:1-14, the wedding feast (reference to be checked against the lectionary).",
      text: "Sample entry only. Jesus tells a parable about a king who prepares a wedding feast for his son and invites many guests. The approved Bible translation text, the USL video and a short explanation will be added once the licence and the review team are confirmed.",
      points: ["Jesus teaches in parables.", "This parable is about a wedding feast.", "God invites everyone to share in His life."],
      quiz: [ { q: "What kind of celebration is in the parable?", a: ["A wedding feast", "A harvest market", "A funeral"], c: 0, e: "In the parable, a king gives a wedding feast for his son." } ] },
    { id: "deaf-man-1", cat: "Scripture", title: "Jesus and the deaf man (part 1)", status: "placeholder", video: null, youtube: "wBSqKKqNKO4",
      credit: "Ugandan Sign Language Bible © 2013 DOOR International, licensed CC BY-SA 4.0. Embedded from YouTube, unchanged.",
      desc: "Jesus heals a man who could not hear (see Mark 7:31-37, reference to be confirmed).",
      text: "Sample summary for the prototype: people bring a deaf man to Jesus and ask Him to help. Jesus heals him. The signed video shows the story in Ugandan Sign Language.",
      points: ["Jesus cares for people who cannot hear.", "The story is told here in Ugandan Sign Language."] },
    { id: "deaf-man-2", cat: "Scripture", title: "Jesus and the deaf man (part 2)", status: "placeholder", video: null, youtube: "HnK7EPL_ppg",
      credit: "Ugandan Sign Language Bible © 2013 DOOR International, licensed CC BY-SA 4.0. Embedded from YouTube, unchanged.",
      desc: "The second video on the same story.",
      text: "Sample summary for the prototype: this video continues the story of Jesus and the deaf man. Text to be replaced by the approved Bible translation once the review team confirms it.",
      points: ["This video continues the story from part 1."] },
    { id: "ten-commandments", cat: "Scripture", title: "The Ten Commandments", status: "placeholder", video: null, youtube: "Ow3-NVYBifY",
      credit: "Ugandan Sign Language Bible © 2013 DOOR International, licensed CC BY-SA 4.0. Embedded from YouTube, unchanged.",
      desc: "God gives the Ten Commandments to Moses (see Exodus 20, reference to be confirmed).",
      text: "Sample summary for the prototype: God gave the Ten Commandments to Moses to teach His people how to love God and love one another. Catholic catechesis numbers and words the commandments in a specific way, so a reviewer must check this lesson before publication.",
      points: ["God gave the Ten Commandments to Moses.", "They teach us how to love God and one another."] },
    { id: "mass-intro", cat: "Mass", title: "The Holy Mass", status: "placeholder", video: null,
      desc: "The four main parts of the Mass.",
      text: "The Mass has four main parts: the Introductory Rites, the Liturgy of the Word, the Liturgy of the Eucharist, and the Concluding Rites. Each lesson in this guide will be reviewed by a catechetical reviewer before publication.",
      points: ["Introductory Rites: we gather, greet one another and ask for mercy.", "Liturgy of the Word: we hear Scripture and the Gospel.", "Liturgy of the Eucharist: we offer bread and wine and receive Communion.", "Concluding Rites: we receive a blessing and are sent out."],
      quiz: [
        { q: "In which part of the Mass do we hear the Gospel?", a: ["Liturgy of the Word", "Concluding Rites", "Introductory Rites"], c: 0, e: "The readings and the Gospel are in the Liturgy of the Word." },
        { q: "How does the Mass end?", a: ["With a blessing and being sent out", "With the readings", "With the Creed"], c: 0, e: "The Concluding Rites include the blessing and the dismissal." } ] },
    { id: "mass-video", cat: "Mass", title: "Full Signed Catholic Mass", status: "placeholder", video: null, youtube: "6kDiDerryFk",
      credit: "Video from CatholicTV (@CatholicTV), shown by YouTube embed, unchanged. Permission to be confirmed. This may not be signed in Ugandan Sign Language.",
      desc: "A signed Mass from CatholicTV, shown as a reference for the prototype only.",
      text: "Reference entry: this video shows a signed Mass from another source and may use a different sign language from Ugandan Sign Language. It is here only to show how a Mass video would look in the app. It will be replaced by a Mass guide signed in USL by Deaf Catholics in Uganda.",
      points: ["Reference video, not USL teaching.", "Permission from the owner is still to be confirmed.", "To be replaced by a USL Mass guide."] },
    { id: "catechesis-basics", cat: "Catechesis", title: "Basic Catholic teaching", status: "placeholder", video: null,
      desc: "What Catholics believe: a first overview.",
      text: "Catholics believe in one God in three Persons: Father, Son and Holy Spirit. Jesus is God's Son who became man, died and rose again. The Church is the family of believers. The Bible is God's word, and the Sacraments are signs of God's love.",
      points: ["One God in three Persons: Father, Son and Holy Spirit.", "Jesus is God's Son. He became man, died and rose again.", "The Church is the family of believers.", "The Bible is God's word to us.", "The Sacraments are signs of God's love."],
      quiz: [
        { q: "How many Persons are in the Holy Trinity?", a: ["Three", "Two", "Seven"], c: 0, e: "Father, Son and Holy Spirit: three Persons, one God." },
        { q: "Who is Jesus?", a: ["God's Son who became man", "A prophet only", "An angel"], c: 0, e: "Catholics believe Jesus is true God and true man." } ] },
    { id: "sacrament-intro", cat: "Sacraments", title: "The seven Sacraments", status: "placeholder", video: null,
      desc: "A first overview for learners and families.",
      text: "Baptism, Confirmation, Eucharist, Reconciliation, Anointing of the Sick, Holy Orders and Matrimony. Detailed preparation lessons will follow after review.",
      points: ["Baptism, Confirmation and Eucharist begin Christian life.", "Reconciliation and Anointing of the Sick bring healing.", "Holy Orders and Matrimony serve communion and mission."],
      quiz: [
        { q: "How many Sacraments are there?", a: ["Seven", "Five", "Nine"], c: 0, e: "The Catholic Church teaches seven Sacraments." },
        { q: "Which Sacrament brings us into the Church?", a: ["Baptism", "Matrimony", "Holy Orders"], c: 0, e: "Baptism is the first Sacrament and the door to the others." } ] }
  ],
  dictionary: [
    { word: "God", note: "Sign pending Deaf and USL review" },
    { word: "Jesus", note: "Sign pending Deaf and USL review" },
    { word: "Church", note: "Sign pending Deaf and USL review" },
    { word: "Prayer", note: "Sign pending Deaf and USL review" },
    { word: "Peace", note: "Sign pending Deaf and USL review" },
    { word: "Love", note: "Sign pending Deaf and USL review" },
    { word: "Mass", note: "Sign pending Deaf and USL review" },
    { word: "Bible", note: "Sign pending Deaf and USL review" },
    { word: "Sin", note: "Terminology that needs careful review, not a literal translation" },
    { word: "Forgiveness", note: "Terminology that needs careful review, not a literal translation" }
  ],
  quiz: [
    { q: "How many Sacraments are there in the Catholic Church?", a: ["Five", "Seven", "Nine"], c: 1 },
    { q: "Which prayer did Jesus teach His disciples?", a: ["Hail Mary", "Glory Be", "Our Father"], c: 2 },
    { q: "Which part of the Mass includes the Gospel reading?", a: ["Liturgy of the Word", "Concluding Rites", "Introductory Rites"], c: 0 }
  ],
  // DEMONSTRATION ONLY. All names, figures and comments below are SAMPLES.
  // No real money is ever handled. Replace with real, approved data before any real campaign.
  campaigns: [
    { id: "c1", title: "USL video production",
      by: "Catholic USL project team (sample)",
      need: "Record and review signed prayers and Gospel readings",
      problem: "Many Deaf Catholics in Uganda cannot follow prayers and teaching in a language they understand. Real figures will be added from UNAD or national data once confirmed. We will not invent numbers.",
      builds: ["10 signed prayers recorded by Deaf Catholics", "Review by Deaf USL users and a Catholic reviewer", "Free videos for parishes and families"],
      who: ["Deaf Catholics and Deaf youth", "Catechists and parishes", "Families of Deaf people"],
      responsible: "To be agreed before launch: the legal recipient of funds, the account owner and the reporting plan.",
      target: 5000000, raised: 1200000, count: 7,
      supporters: [
        { name: "Sample supporter", amt: 10000, ago: "2 days ago" },
        { name: "Anonymous", amt: 5000, ago: "3 days ago" },
        { name: "Sample parish group", amt: 50000, ago: "5 days ago" }
      ],
      comments: [ { name: "Sample supporter", text: "Every Deaf Catholic should be able to pray in their own language." } ] },
    { id: "c2", title: "Catechist training",
      by: "Catholic USL project team (sample)",
      need: "Train catechists to teach with Deaf learners",
      problem: "Few catechists know Ugandan Sign Language. Real figures will be added once confirmed.",
      builds: ["A short training for catechists", "Basic USL for the Mass and prayers", "Teaching materials for classes"],
      who: ["Catechists", "Deaf learners in parishes"],
      responsible: "To be agreed before launch: the legal recipient of funds, the account owner and the reporting plan.",
      target: 3000000, raised: 450000, count: 3,
      supporters: [ { name: "Anonymous", amt: 20000, ago: "1 week ago" } ],
      comments: [] }
  ]
};

// ROLES (demo). In the live app an administrator assigns roles after sign-in; users never choose their own.
// Content approval stays separate from money: no role below can approve donations or finance.
window.CONTENT.permLabels = {
  browse:"Browse and watch content", save:"Save favourites", progress:"Track progress", feedback:"Send feedback",
  teach:"Prepare lessons and class packs", submit:"Submit videos, translations and dictionary entries",
  review_usl:"Confirm sign-language accuracy", review_doctrine:"Confirm doctrine and prayers",
  reports:"View and log pilot activity reports", distribute:"Share and distribute resources",
  tech_check:"Run technical checks", publish:"Publish approved content",
  feedback_view:"Read feedback and correction requests", manage_users:"Manage users and roles", audit:"View the audit log"
};
window.CONTENT.roles = [
  { id:"deaf_catholic", name:"Deaf Catholic", level:"User", group:"Primary beneficiaries",
    desc:"Learn, pray and follow the Mass in USL, with words alongside.",
    perms:["browse","save","progress","feedback"] },
  { id:"learner", name:"Catholic school or Deaf learner", level:"User", group:"Faith education",
    desc:"Use lessons and quizzes set by teachers and catechists.",
    perms:["browse","save","progress","feedback"] },
  { id:"clergy", name:"Priest or catechist", level:"Moderate admin", group:"Parish teaching",
    desc:"Teach with approved materials and confirm that doctrine and prayers are correct.",
    perms:["browse","save","progress","feedback","teach","review_doctrine","reports","feedback_view"] },
  { id:"usl_specialist", name:"USL interpreter or Deaf instructor", level:"Moderate admin", group:"Content creation",
    desc:"Create signed content and written translations, and confirm sign accuracy.",
    perms:["browse","save","progress","feedback","submit","review_usl","feedback_view"] },
  { id:"partner", name:"Diocesan leader or Deaf association", level:"Partner", group:"Partnerships",
    desc:"See aggregated reach and share the app through dioceses and associations.",
    perms:["browse","save","feedback","reports","distribute"] },
  { id:"dev", name:"Development team", level:"Super admin", group:"Platform",
    desc:"Runs the platform, users, roles and technical checks. Cannot confirm doctrine or signs.",
    perms:["browse","feedback","tech_check","publish","manage_users","audit","reports","feedback_view"] }
];
// SAMPLE review queue
window.CONTENT.queue = [
  { id:"q1", title:"Our Father (USL video)", type:"Prayer video", by:"Sample contributor", usl:false, doctrine:false, tech:false, published:false },
  { id:"q2", title:"Hail Mary (USL video)", type:"Prayer video", by:"Sample contributor", usl:true, doctrine:false, tech:true, published:false },
  { id:"q3", title:"Dictionary: Church, Prayer, Peace", type:"Dictionary entries", by:"Sample contributor", usl:true, doctrine:true, tech:true, published:false }
];
// SITE SETTINGS
window.CONTENT.config = {
  demoMode: true,                  // true = anyone can switch demo roles. Set false for a public launch.
  deafCommunityConfirmed: false,   // set true only after Deaf Catholics have agreed to co-design the app
  contactEmail: "catholicusl.platform@gmail.com",
  coordinator: "Joseph Alibankoha, Project Coordinator",
  pilotTarget: "UGX 5,000,000 to 10,000,000",
  // Supabase (public values, safe in the browser: access is controlled by database rules).
  supabaseUrl: "https://dnawieggwsuoupqbdhpv.supabase.co",
  supabaseKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRuYXdpZWdnd3N1b3VwcWJkaHB2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTE5MDU1ODcsImV4cCI6MjEwNzQ4MTU4N30.BobRoEJtZItoDVB37CgpyxEU0bBpgdCZ1hA_KSqKLss"
};
