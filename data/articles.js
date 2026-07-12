const articleData = [
  {
    article: "12",
    display: "Definition of State",
    keywords: ["Definition of State", "State"],
  },
  {
    article: "13",
    display: "Laws inconsistent with Fundamental Rights",
    keywords: [
      "Laws inconsistent with Fundamental Rights",
      "Fundamental Rights",
      "FR",
    ],
  },
  {
    article: "14",
    display: "Equality before Law",
    keywords: ["Equality before Law", "Equality"],
  },
  {
    article: "15",
    display: "Prohibition of Discrimination",
    keywords: ["Prohibition of Discrimination", "Discrimination"],
  },
  {
    article: "16",
    display: "Equality of Opportunity in Public Employment",
    keywords: [
      "Equality of Opportunity in Public Employment",
      "Equality of Opportunity",
      "Public Employment",
    ],
  },
  {
    article: "17",
    display: "Abolition of Untouchability",
    keywords: ["Abolition of Untouchability", "Untouchability"],
  },
  {
    article: "18",
    display: "Abolition of Titles",
    keywords: ["Abolition of Titles", "Titles"],
  },
  {
    article: "19",
    display: "Six Fundamental Freedoms",
    keywords: ["Six Fundamental Freedoms", "Fundamental Freedoms", "Freedoms"],
  },
  {
    article: "20",
    display: "Protection in respect of Conviction for Offences",
    keywords: [
      "Protection in respect of Conviction for Offences",
      "Conviction for Offences",
    ],
  },
  {
    article: "21",
    display: "Protection of Life and Personal Liberty",
    keywords: [
      "Protection of Life and Personal Liberty",
      "Life and Personal Liberty",
      "Right to Life",
    ],
  },
  {
    article: "21A",
    display: "Right to Education",
    keywords: ["Right to Education", "Education"],
  },
  {
    article: "22",
    display: "Protection against Arrest and Detention",
    keywords: [
      "Protection against Arrest and Detention",
      "Arrest and Detention",
    ],
  },
  {
    article: "23",
    display: "Prohibition of Human Trafficking and Forced Labour",
    keywords: ["Human Trafficking", "Forced Labour", "Trafficking"],
  },
  {
    article: "24",
    display: "Prohibition of Child Labour",
    keywords: ["Child Labour", "Prohibition of Child Labour"],
  },
  {
    article: "25",
    display: "Freedom of Religion",
    keywords: ["Freedom of Religion", "Religion"],
  },
  {
    article: "26",
    display: "Manage Religious Affairs",
    keywords: ["Manage Religious Affairs", "Religious Affairs"],
  },
  {
    article: "27",
    display: "Freedom from Religious Taxes",
    keywords: ["Freedom from Religious Taxes", "Religious Taxes"],
  },
  {
    article: "28",
    display: "Religious Instruction in Educational Institutions",
    keywords: ["Religious Instruction", "Educational Institutions"],
  },
  {
    article: "29",
    display: "Protection of Culture and Educational Rights",
    keywords: ["Culture and Educational Rights", "Cultural Rights"],
  },
  {
    article: "30",
    display: "Minority Educational Institutions",
    keywords: ["Minority Educational Institutions", "Minority Institutions"],
  },
  {
    article: "32",
    display: "Right to Constitutional Remedies",
    keywords: ["Right to Constitutional Remedies", "Constitutional Remedies"],
  },
  {
    article: "36",
    display: "Definition of State (DPSP)",
    keywords: ["Definition of State", "State"],
  },
  {
    article: "40",
    display: "Organisation of Village Panchayats",
    keywords: ["Village Panchayats", "Panchayats"],
  },
  {
    article: "44",
    display: "Uniform Civil Code",
    keywords: ["Uniform Civil Code", "UCC"],
  },
  {
    article: "45",
    display: "Early Childhood Care and Education",
    keywords: ["Early Childhood Care and Education", "Childhood Education"],
  },
  {
    article: "48A",
    display: "Protection of Environment",
    keywords: ["Protection of Environment", "Environment"],
  },
  {
    article: "50",
    display: "Separation of Judiciary from Executive",
    keywords: [
      "Separation of Judiciary from Executive",
      "Judiciary from Executive",
    ],
  },
  {
    article: "51A",
    display: "Fundamental Duties",
    keywords: ["Fundamental Duties", "Duties"],
  },
  {
    article: "52",
    display: "President of India",
    keywords: ["President", "President of India"],
  },
  {
    article: "54",
    display: "Election of President",
    keywords: ["Election of President"],
  },
  {
    article: "61",
    display: "Impeachment of President",
    keywords: ["Impeachment of President", "Impeachment"],
  },
  {
    article: "63",
    display: "Vice-President",
    keywords: ["Vice-President", "Vice President"],
  },
  {
    article: "74",
    display: "Council of Ministers to Aid and Advise President",
    keywords: ["Council of Ministers", "Aid and Advise President"],
  },
  {
    article: "76",
    display: "Attorney General of India",
    keywords: ["Attorney General", "AGI"],
  },
  {
    article: "79",
    display: "Parliament",
    keywords: ["Parliament"],
  },
  {
    article: "80",
    display: "Rajya Sabha",
    keywords: ["Rajya Sabha"],
  },
  {
    article: "81",
    display: "Lok Sabha",
    keywords: ["Lok Sabha"],
  },
  {
    article: "83",
    display: "Duration of Houses",
    keywords: ["Duration of Houses"],
  },
  {
    article: "85",
    display: "Sessions of Parliament",
    keywords: ["Sessions of Parliament", "Parliament Sessions"],
  },
  {
    article: "110",
    display: "Money Bill",
    keywords: ["Money Bill"],
  },
  {
    article: "112",
    display: "Annual Financial Statement",
    keywords: ["Annual Financial Statement", "Budget"],
  },
  {
    article: "123",
    display: "Ordinance Making Power of President",
    keywords: ["Ordinance", "Ordinance Making Power"],
  },
  {
    article: "124",
    display: "Supreme Court",
    keywords: ["Supreme Court"],
  },
  {
    article: "143",
    display: "Presidential Reference",
    keywords: ["Presidential Reference"],
  },
  {
    article: "148",
    display: "Comptroller and Auditor General",
    keywords: ["Comptroller and Auditor General", "CAG"],
  },
  {
    article: "153",
    display: "Governor",
    keywords: ["Governor"],
  },
  {
    article: "155",
    display: "Appointment of Governor",
    keywords: ["Appointment of Governor"],
  },
  {
    article: "161",
    display: "Governor's Pardoning Power",
    keywords: ["Governor's Pardoning Power", "Pardoning Power"],
  },
  {
    article: "165",
    display: "Advocate General",
    keywords: ["Advocate General"],
  },
  {
    article: "168",
    display: "State Legislature",
    keywords: ["State Legislature"],
  },
  {
    article: "169",
    display: "Creation or Abolition of Legislative Council",
    keywords: [
      "Legislative Council",
      "Creation or Abolition of Legislative Council",
    ],
  },
  {
    article: "214",
    display: "High Court for States",
    keywords: ["High Court"],
  },
  {
    article: "243",
    display: "Panchayats",
    keywords: ["Panchayats"],
  },
  {
    article: "243P",
    display: "Municipalities",
    keywords: ["Municipalities"],
  },
  {
    article: "280",
    display: "Finance Commission",
    keywords: ["Finance Commission"],
  },
  {
    article: "312",
    display: "All India Services",
    keywords: ["All India Services"],
  },
  {
    article: "324",
    display: "Election Commission",
    keywords: ["Election Commission", "Election Commission of India", "ECI"],
  },
  {
    article: "352",
    display: "National Emergency",
    keywords: ["National Emergency"],
  },
  {
    article: "356",
    display: "President's Rule",
    keywords: ["President's Rule", "State Emergency"],
  },
  {
    article: "360",
    display: "Financial Emergency",
    keywords: ["Financial Emergency"],
  },
  {
    article: "368",
    display: "Constitutional Amendment",
    keywords: ["Constitutional Amendment", "Amendment Procedure"],
  },
];
