// CATHOLIC USL - CONTENT FILE
// To add a real sign video: upload the MP4 into the "videos" folder on GitHub,
// then change   video: null   to   video: "videos/our-father.mp4"
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
  // Demonstration only. No real money is ever handled in the prototype.
  campaigns: [
    { id: "c1", title: "USL video production", need: "Record and review signed prayers and Gospel readings", target: 5000000, raised: 1200000 },
    { id: "c2", title: "Catechist training", need: "Train catechists to teach with Deaf learners", target: 3000000, raised: 450000 }
  ]
};
