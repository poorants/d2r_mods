const pettypePath = "global\\excel\\pettype.txt";
const pettype = D2RMM.readTsv(pettypePath);

const skillsPath = "global\\excel\\skills.txt";
const skills = D2RMM.readTsv(skillsPath);

const statesPath = "global\\excel\\states.txt";
const states = D2RMM.readTsv(statesPath);

const monstatsPath = "global\\excel\\monstats.txt";
const monstats = D2RMM.readTsv(monstatsPath);

const monstats2Path = "global\\excel\\monstats2.txt";
const monstats2 = D2RMM.readTsv(monstats2Path);

const skilldescPath = "global\\excel\\skilldesc.txt";
const skilldesc = D2RMM.readTsv(skilldescPath);

const monaiPath = "global\\excel\\monai.txt";
const monai = D2RMM.readTsv(monaiPath);

// Modify raise skeleton family to summon without a corpse
targets = ["Raise Skeleton"];
skills.rows.forEach((row) => {
  if (targets.includes(row["skill"])) {
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

// Modify raise skeleton mage
if (config.enhancedLich) {
  targets = ["Raise Skeletal Mage"];
  skills.rows.forEach((row) => {
    if (targets.includes(row["skill"])) {
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

  monstats.rows.forEach((row) => {
    if (row["Id"] === "necromage") {
      row["AI"] = "OblivionKnight";
      row["Skill1"] = "Bone Spirit";
      row["Sk1mode"] = "A1";
      row["Sk1lvl"] = "1";
      row["Skill2"] = "Teeth";
      row["Sk2mode"] = "A1";
      row["Sk2lvl"] = "1";
      row["Skill3"] = "Bone Spear";
      row["Sk3mode"] = "A1";
      row["Sk3lvl"] = "1";
      row["Skill4"] = "Amplify Damage";
      row["Sk4mode"] = "A1";
      row["Sk4lvl"] = "1";
      row["Skill5"] = "Bone Armor";
      row["Sk5mode"] = "A1";
      row["Sk5lvl"] = "1";
      row["aip1"] = "6"; //
      row["aip1(N)"] = "7";
      row["aip1(H)"] = "8";
      row["aip2"] = "25"; //
      row["aip2(N)"] = "26";
      row["aip2(H)"] = "27";
      row["aip3"] = "500";
      row["aip3(N)"] = "350";
      row["aip3(H)"] = "200";
      row["aip4"] = "50";
      row["aip4(N)"] = "50";
      row["aip4(H)"] = "50";
      row["aip5"] = "80"; //
      row["aip5(N)"] = "85";
      row["aip5(H)"] = "90";
      row["aip6"] = "30"; //
      row["aip6(N)"] = "30";
      row["aip6(H)"] = "30";
      row["aip7"] = "30"; //
      row["aip7(N)"] = "30";
      row["aip7(H)"] = "30";
      row["aip8"] = "9"; //
      row["aip8(N)"] = "10";
      row["aip8(H)"] = "11";
    }
  });

  skills.rows.forEach((row) => {
    if (row.skill === "Raise Skeletal Mage") {
      row.sumskill1 = "Bone Spear";
      row.sumskill1calc =
        "skill('Skeleton Mastery'.lvl) + ((lvl <= 10) ? lvl : (10 + ((lvl - 10) / 2)))";
      row.sumskill2 = "";
      row.sumsk2calc = "";
      row.sumskill3 = "Bone Spirit";
      row.sumsk3calc = row.sumskill1calc;
      row.sumskill4 = "Amplify Damage";
      row.sumsk4calc = row.sumskill1calc;
      row.sumskill5 = "";
      row.sumsk5calc = "";
    }
  });
}

// Modify golem family to summon without a corpse
skills.rows.forEach((row) => {
  if (row.skill === "Clay Golem") {
    row.sumskill5 = "Might";
    row.sumsk5calc =
      "skill('Golem Mastery'.lvl) + ((lvl <= 10) ? lvl : (10 + ((lvl - 10) / 2)))";
  }
  if (row.skill === "BloodGolem") {
    row.pettype = "bloodgolem";
    row.sumskill5 = "Fanaticism";
    row.sumsk5calc =
      "skill('Golem Mastery'.lvl) + ((lvl <= 10) ? lvl : (10 + ((lvl - 10) / 2)))";
  }
  if (row.skill === "IronGolem") {
    row.pettype = "irongolem";
    row.sumskill5 = "Concentration";
    row.sumsk5calc =
      "skill('Golem Mastery'.lvl) + ((lvl <= 10) ? lvl : (10 + ((lvl - 10) / 2)))";
  }
  if (row.skill === "FireGolem") {
    row.pettype = "firegolem";
    row.sumskill5 = "Conviction";
    row.sumsk5calc =
      "skill('Golem Mastery'.lvl) + ((lvl <= 10) ? lvl : (10 + ((lvl - 10) / 2)))";
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

const pettypeGolem = pettype.rows.find((row) => row["pet type"] === "golem");

const pettypeBloodgolem = {
  ...pettypeGolem,
  ["pet type"]: "bloodgolem",
  baseicon: "bloodgolumicon",
  mclass1: 290,
  micon1: "bloodgolumicon",
};
pettype.rows.push(pettypeBloodgolem);

const pettypeIronGolem = {
  ...pettypeGolem,
  ["pet type"]: "irongolem",
  baseicon: "irongolumicon",
  mclass1: 291,
  micon1: "irongolumicon",
};
pettype.rows.push(pettypeIronGolem);

const pettypeFireGolem = {
  ...pettypeGolem,
  ["pet type"]: "firegolem",
  baseicon: "firegolumicon",
  mclass1: 292,
  micon1: "firegolumicon",
};
pettype.rows.push(pettypeFireGolem);

// write
D2RMM.writeTsv(pettypePath, pettype);
D2RMM.writeTsv(skillsPath, skills);
D2RMM.writeTsv(statesPath, states);
D2RMM.writeTsv(monstatsPath, monstats);
D2RMM.writeTsv(monstats2Path, monstats2);
D2RMM.writeTsv(skilldescPath, skilldesc);
D2RMM.writeTsv(monaiPath, monai);
