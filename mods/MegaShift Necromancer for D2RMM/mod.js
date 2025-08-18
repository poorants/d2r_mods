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
if (config.deathKnight) {
  skills.rows.forEach((row) => {
    if (row.skill === "Raise Skeleton") {
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
    if (row["Id"] === "necroskeleton") {
      row["AI"] = "Duriel";
      row["Skill1"] = "Charge";
      row["Sk1mode"] = "A1";
      row["Sk1lvl"] = "1";
      row["Skill2"] = "Jab";
      row["Sk2mode"] = "A1";
      row["Sk2lvl"] = "1";
      row["Skill3"] = "Smite";
      row["Sk3mode"] = "A1";
      row["Sk3lvl"] = "1";
      row["Skill4"] = "";
      row["Sk4mode"] = "";
      row["Sk4lvl"] = "";
      row["Skill5"] = "";
      row["Sk5mode"] = "";
      row["Sk5lvl"] = "";
      row["aip1"] = "5"; //
      row["aip1(N)"] = "5";
      row["aip1(H)"] = "6";
      row["aip2"] = "33"; //
      row["aip2(N)"] = "33";
      row["aip2(H)"] = "33";
      row["aip3"] = "50";
      row["aip3(N)"] = "50";
      row["aip3(H)"] = "50";
      row["aip4"] = "";
      row["aip4(N)"] = "";
      row["aip4(H)"] = "";
      row["aip5"] = ""; //
      row["aip5(N)"] = "";
      row["aip5(H)"] = "";
      row["aip6"] = ""; //
      row["aip6(N)"] = "";
      row["aip6(H)"] = "";
      row["aip7"] = ""; //
      row["aip7(N)"] = "";
      row["aip7(H)"] = "";
      row["aip8"] = ""; //
      row["aip8(N)"] = "";
      row["aip8(H)"] = "";
    }
  });

  const skeletonSkillAuraCalc =
    "skill('Skeleton Mastery'.lvl) + ((lvl <= 10) ? lvl : (10 + ((lvl - 10) / 2)))";
  skills.rows.forEach((row) => {
    if (row.skill === "Raise Skeleton") {
      row.sumskill1 = "Charge";
      row.sumskill1calc = skeletonSkillAuraCalc;
      row.sumskill2 = "Jab";
      row.sumsk2calc = skeletonSkillAuraCalc;
      row.sumskill3 = "Smite";
      row.sumsk3calc = skeletonSkillAuraCalc;
      row.sumskill4 = "";
      row.sumsk4calc = "";
      row.sumskill5 = "";
      row.sumsk5calc = "";
    }
  });
}

// Modify raise skeleton mage
if (config.lich) {
  skills.rows.forEach((row) => {
    if (row.skill === "Raise Skeletal Mage") {
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

  const skeletalMageSkillAuraCalc =
    "skill('Skeleton Mastery'.lvl) + ((lvl <= 10) ? lvl : (10 + ((lvl - 10) / 2)))";
  skills.rows.forEach((row) => {
    if (row.skill === "Raise Skeletal Mage") {
      row.sumskill1 = "Bone Spear";
      row.sumskill1calc = skeletalMageSkillAuraCalc;
      row.sumskill2 = "";
      row.sumsk2calc = "";
      row.sumskill3 = "Bone Spirit";
      row.sumsk3calc = skeletalMageSkillAuraCalc;
      row.sumskill4 = "Amplify Damage";
      row.sumsk4calc = skeletalMageSkillAuraCalc;
      row.sumskill5 = "";
      row.sumsk5calc = "";
    }
  });
}

// Modify golem family to summon without a corpse
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

// Golem Ascendant
if (config.ancientGolem) {
  const golemAuraCalc =
    "skill('Golem Mastery'.lvl) + ((lvl <= 10) ? lvl : (10 + ((lvl - 10) / 2)))";

  skills.rows.forEach((row) => {
    if (row.skill === "Clay Golem") {
      row.sumskill1 = "Smite";
      row.sumsk1calc = golemAuraCalc;
      row.sumskill2 = "Prayer";
      row.sumsk2calc = golemAuraCalc;
      row.sumskill3 = "Defiance";
      row.sumsk3calc = golemAuraCalc;
      row.sumskill4 = "Vigor";
      row.sumsk4calc = golemAuraCalc;
      row.sumskill5 = "Meditation";
      row.sumsk5calc = golemAuraCalc;
    }
    if (row.skill === "BloodGolem") {
      row.sumskill1 = "Might";
      row.sumsk1calc = golemAuraCalc;
      row.sumskill2 = "Blessed Aim";
      row.sumsk2calc = golemAuraCalc;
      row.sumskill3 = "Concentration";
      row.sumsk3calc = golemAuraCalc;
      row.sumskill4 = "Fanaticism";
      row.sumsk4calc = golemAuraCalc;
      row.sumskill5 = "Conviction";
      row.sumsk5calc = golemAuraCalc;
    }
    if (row.skill === "IronGolem") {
      row.sumskill1 = "Holy Freeze";
      row.sumsk1calc = golemAuraCalc;
      row.sumskill2 = "Thorns";
      row.sumsk2calc = golemAuraCalc;
      row.sumskill3 = "Sanctuary";
      row.sumsk3calc = golemAuraCalc;
      row.sumskill4 = "Holy Shock";
      row.sumsk4calc = golemAuraCalc;
    }
    if (row.skill === "FireGolem") {
      row.sumskill1 = "Cleansing";
      row.sumsk1calc = golemAuraCalc;
      row.sumskill2 = "Resist Lightning";
      row.sumsk2calc = golemAuraCalc;
      row.sumskill3 = "Resist Cold";
      row.sumsk3calc = golemAuraCalc;
      row.sumskill4 = "Resist Fire";
      row.sumsk4calc = golemAuraCalc;
      row.sumskill5 = "Salvation";
      row.sumsk5calc = golemAuraCalc;
    }
  });
}

// write
D2RMM.writeTsv(pettypePath, pettype);
D2RMM.writeTsv(skillsPath, skills);
D2RMM.writeTsv(statesPath, states);
D2RMM.writeTsv(monstatsPath, monstats);
D2RMM.writeTsv(monstats2Path, monstats2);
D2RMM.writeTsv(skilldescPath, skilldesc);
D2RMM.writeTsv(monaiPath, monai);
