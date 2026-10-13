// CATHOLIC USL - CONTENT FILE
// To add a real sign video: upload the MP4 into the "videos" folder on GitHub,
// then change   video: null   to   video: "videos/our-father.mp4"
// For a YouTube video use   youtube: "VIDEO_ID"   (the part after youtu.be/ and before ?si=)
// Words for readers: add   translations: { Luganda: "...", Kiswahili: "..." }   to any item (English uses "text").
// Status values: "placeholder" (no real review yet) | "usl-reviewed" | "approved"
// Nothing here is approved doctrine until the review team signs it off.

window.CONTENT = {
  items: [
    { id: "sign-of-cross", cat: "Prayers", title: "Sign of the Cross", status: "placeholder", video: null,
      desc: "The prayer that begins and ends our prayer.",
      text: "In the name of the Father, and of the Son, and of the Holy Spirit. Amen." },
    { id: "our-father", cat: "Prayers", title: "Our Father", status: "placeholder", video: null,
      desc: "The prayer Jesus taught His disciples.",
      text: "Our Father, who art in heaven, hallowed be thy name; thy kingdom come; thy will be done on earth as it is in heaven. Give us this day our daily bread; and forgive us our trespasses as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen." },
    { id: "hail-mary", cat: "Prayers", title: "Hail Mary", status: "placeholder", video: null,
      desc: "A prayer to Mary, mother of Jesus.",
      text: "Hail Mary, full of grace, the Lord is with thee. Blessed art thou amongst women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen." },
    { id: "glory-be", cat: "Prayers", title: "Glory Be", status: "placeholder", video: null,
      desc: "A short prayer of praise to the Trinity.",
      text: "Glory be to the Father, and to the Son, and to the Holy Spirit, as it was in the beginning, is now, and ever shall be, world without end. Amen." },
    { id: "deaf-man-1", cat: "Scripture", title: "Jesus and the deaf man (part 1)", status: "placeholder", video: null, youtube: "wBSqKKqNKO4",
      credit: "Ugandan Sign Language Bible © 2013 DOOR International, licensed CC BY-SA 4.0. Embedded from YouTube, unchanged.",
      desc: "Jesus heals a man who could not hear (see Mark 7:31-37, reference to be confirmed).",
      text: "Sample summary for the prototype: people bring a deaf man to Jesus and ask Him to help. Jesus heals him. The signed video shows the story in Ugandan Sign Language." },
    { id: "deaf-man-2", cat: "Scripture", title: "Jesus and the deaf man (part 2)", status: "placeholder", video: null, youtube: "HnK7EPL_ppg",
      credit: "Ugandan Sign Language Bible © 2013 DOOR International, licensed CC BY-SA 4.0. Embedded from YouTube, unchanged.",
      desc: "The second video on the same story.",
      text: "Sample summary for the prototype: this video continues the story of Jesus and the deaf man. Text to be replaced by the approved Bible translation once the review team confirms it." },
    { id: "ten-commandments", cat: "Scripture", title: "The Ten Commandments", status: "placeholder", video: null, youtube: "Ow3-NVYBifY",
      credit: "Ugandan Sign Language Bible © 2013 DOOR International, licensed CC BY-SA 4.0. Embedded from YouTube, unchanged.",
      desc: "God gives the Ten Commandments to Moses (see Exodus 20, reference to be confirmed).",
      text: "Sample summary for the prototype: God gave the Ten Commandments to Moses to teach His people how to love God and love one another. Catholic catechesis numbers and words the commandments in a specific way, so a reviewer must check this lesson before publication." },
    { id: "gospel-sample", cat: "Scripture", title: "Sunday Gospel: sample entry", status: "placeholder", video: null,
      desc: "Matthew 22:1-14 (28th Sunday in Ordinary Time, Year A)",
      text: "Sample entry only. The approved Bible translation text, the USL video and a short explanation will be added here once the licence and the review team are confirmed." },
    { id: "mass-intro", cat: "Mass", title: "Parts of the Mass: overview", status: "placeholder", video: null,
      desc: "Introductory Rites, Liturgy of the Word, Liturgy of the Eucharist, Concluding Rites.",
      text: "The Mass has four main parts: the Introductory Rites, the Liturgy of the Word, the Liturgy of the Eucharist, and the Concluding Rites. Each lesson in this guide will be reviewed by a catechetical reviewer before publication." },
    { id: "sacrament-intro", cat: "Sacraments", title: "The seven Sacraments", status: "placeholder", video: null,
      desc: "A first overview for learners and families.",
      text: "Baptism, Confirmation, Eucharist, Reconciliation, Anointing of the Sick, Holy Orders and Matrimony. Detailed preparation lessons will follow after review." }
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
  reports:"View aggregated reports", distribute:"Share and distribute resources",
  tech_check:"Run technical checks", publish:"Publish approved content",
  manage_users:"Manage users and roles", audit:"View the audit log"
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
    perms:["browse","save","progress","feedback","teach","review_doctrine"] },
  { id:"usl_specialist", name:"USL interpreter or Deaf instructor", level:"Moderate admin", group:"Content creation",
    desc:"Create signed content and written translations, and confirm sign accuracy.",
    perms:["browse","save","progress","feedback","submit","review_usl"] },
  { id:"partner", name:"Diocesan leader or Deaf association", level:"Partner", group:"Partnerships",
    desc:"See aggregated reach and share the app through dioceses and associations.",
    perms:["browse","save","feedback","reports","distribute"] },
  { id:"dev", name:"Development team", level:"Super admin", group:"Platform",
    desc:"Runs the platform, users, roles and technical checks. Cannot confirm doctrine or signs.",
    perms:["browse","feedback","tech_check","publish","manage_users","audit","reports"] }
];
// SAMPLE review queue
window.CONTENT.queue = [
  { id:"q1", title:"Our Father (USL video)", type:"Prayer video", by:"Sample contributor", usl:false, doctrine:false, tech:false, published:false },
  { id:"q2", title:"Hail Mary (USL video)", type:"Prayer video", by:"Sample contributor", usl:true, doctrine:false, tech:true, published:false },
  { id:"q3", title:"Dictionary: Church, Prayer, Peace", type:"Dictionary entries", by:"Sample contributor", usl:true, doctrine:true, tech:true, published:false }
];
