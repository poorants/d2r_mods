const pettypePath = "global\\excel\\pettype.txt";
const pettype = D2RMM.readTsv(pettypePath);

const skillsPath = "global\\excel\\skills.txt";
const skills = D2RMM.readTsv(skillsPath);

const statesPath = "global\\excel\\states.txt";
const states = D2RMM.readTsv(statesPath);

const monstatsPath = "global\\excel\\monstats.txt";
const monstats = D2RMM.readTsv(monstatsPath);

const skilldescPath = "global\\excel\\skilldesc.txt";
const skilldesc = D2RMM.readTsv(skilldescPath);

targets = ["Raise Skeleton", "Raise Skeletal Mage"];
skills.rows.forEach((row) => {
  if (targets.includes(row['skill'])) {
    row.srvstfunc = "";
    row.srvdofunc = 56;
    row.stsuccessonly = "";
    row.cltmissilea = "";
    row.cltstfunc = "";
    row.cltdofunc = "";
    row.SelectProc = "";
    row.TargetCorpse = "";
    row.InTown = 1;
  }
});

skills.rows.forEach((row) => {
  if (row.skill === "BloodGolem") {
    row.pettype = "bloodgolem";
  }
  if (row.skill === "IronGolem") {
    row.pettype = "irongolem";
  }
  if (row.skill === "FireGolem") {
    row.pettype = "firegolem";
  }
});



pettype.rows.forEach((row) => {
  if (row["pet type"] === "golem") {
    row.baseicon = "earthgolumicon";
    row.mclass1 = 289;
    row.micon1 = "earthgolumicon";
    row.mclass2 = "";
    row.micon2 = "";
    row.mclass3 = "";
    row.micon3 = "";
  }
});

const pettypeGolem = pettype.rows.find((row) => row['pet type'] === "golem");

const pettypeBloodgolem = { ...pettypeGolem,  ["pet type"]: "bloodgolem", baseicon: "bloodgolumicon", mclass1: 290, micon1: "bloodgolumicon" };
pettype.rows.push(pettypeBloodgolem);

const pettypeIronGolem = { ...pettypeGolem, ["pet type"]: "irongolem", baseicon: "irongolumicon", mclass1: 291, micon1: "irongolumicon" };
pettype.rows.push(pettypeIronGolem);

const pettypeFireGolem = { ...pettypeGolem,  ["pet type"]: "firegolem", baseicon: "firegolumicon", mclass1: 292, micon1: "firegolumicon" };
pettype.rows.push(pettypeFireGolem);


// write
D2RMM.writeTsv(pettypePath, pettype);
D2RMM.writeTsv(skillsPath, skills);
D2RMM.writeTsv(statesPath, states);
D2RMM.writeTsv(monstatsPath, monstats);
D2RMM.writeTsv(skilldescPath, skilldesc);
