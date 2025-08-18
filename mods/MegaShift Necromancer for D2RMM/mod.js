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

const monpropPath = "global\\excel\\monprop.txt";
const monprop = D2RMM.readTsv(monpropPath);

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
      row["AI"] = "PinHead";
      row["Skill1"] = "Smite";
      row["Sk1mode"] = "A2";
      row["Sk1lvl"] = "1";
      row["Skill2"] = "";
      row["Sk2mode"] = "";
      row["Sk2lvl"] = "";
      row["Skill3"] = "";
      row["Sk3mode"] = "";
      row["Sk3lvl"] = "";
      row["Skill4"] = "";
      row["Sk4mode"] = "";
      row["Sk4lvl"] = "";
      row["Skill5"] = "";
      row["Sk5mode"] = "";
      row["Sk5lvl"] = "";
      row["aip1"] = "90"; //
      row["aip1(N)"] = "95";
      row["aip1(H)"] = "97";
      row["aip2"] = "7"; //
      row["aip2(N)"] = "7";
      row["aip2(H)"] = "7";
      row["aip3"] = "95";
      row["aip3(N)"] = "95";
      row["aip3(H)"] = "95";
      row["aip4"] = "5";
      row["aip4(N)"] = "5";
      row["aip4(H)"] = "5";
      row["aip5"] = "65"; //
      row["aip5(N)"] = "65";
      row["aip5(H)"] = "70";
      row["aip6"] = ""; //
      row["aip6(N)"] = "";
      row["aip6(H)"] = "";
      row["aip7"] = ""; //
      row["aip7(N)"] = "";
      row["aip7(H)"] = "";
      row["aip8"] = ""; //
      row["aip8(N)"] = "";
      row["aip8(H)"] = "";
      row["Param1"] = 100; // % chance to spawn with a shield (default 5)
      row["Param2"] = 100; // HP % per level (default 50)
      row["Param3"] = 700; // Damage % per level (default 7)
      row["Param4"] = 75; // Attack Rating per level (default 15)
      row["Param5"] = 75; // Armor per level (default 15)
    }
  });

  skills.rows.forEach((row) => {
    if (row.skill === "Skeleton Mastery") {
      row.Param1 = 50; // HP per level (default 8)
      row.Param2 = 500; // Damage per level (default 2)
      row.Param3 *= 5; // Revive Synergy HP % per level (default 5)
      row.Param4 *= 2; // Revive Synergy Damage % per level (default 10)
    }
  });

  const skeletonSkillAuraCalc =
    "skill('Skeleton Mastery'.lvl) + ((lvl <= 10) ? lvl : (10 + ((lvl - 10) / 2)))";
  skills.rows.forEach((row) => {
    if (row.skill === "Raise Skeleton") {
      row.sumskill1 = "Smite";
      row.sumskill1calc = skeletonSkillAuraCalc;
      row.sumskill2 = "";
      row.sumsk2calc = "";
      row.sumskill3 = "";
      row.sumsk3calc = "";
      row.sumskill4 = "";
      row.sumsk4calc = "";
      row.sumskill5 = "";
      row.sumsk5calc = "";
      row.sumskill5 = "Fanaticism";
      row.sumsk5calc = skeletonSkillAuraCalc;
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
  /* ---------- monstats: necromage (Lich AI) ---------- */
  monstats.rows.forEach((row) => {
    if (row["Id"] === "necromage") {
      row["AI"] = "OblivionKnight";

      // Combat skills (AI trigger)
      row["Skill1"] = "Bone Spear";
      row["Sk1mode"] = "A1";
      row["Sk1lvl"] = "1";
      row["Skill2"] = "";
      row["Sk2mode"] = "";
      row["Sk2lvl"] = "";
      row["Skill3"] = "Bone Spirit";
      row["Sk3mode"] = "A1";
      row["Sk3lvl"] = "1";
      row["Skill4"] = "Amplify Damage";
      row["Sk4mode"] = "A1";
      row["Sk4lvl"] = "1";
      row["Skill5"] = "";
      row["Sk5mode"] = "";
      row["Sk5lvl"] = "";

      // AI parameters (OblivionKnight based, tuned for lich)
      row["aip1"] = "7";
      row["aip1(N)"] = "7";
      row["aip1(H)"] = "8"; // run away range
      row["aip2"] = "24";
      row["aip2(N)"] = "25";
      row["aip2(H)"] = "26"; // ranged skill range
      row["aip3"] = "350";
      row["aip3(N)"] = "250";
      row["aip3(H)"] = "200"; // curse interval
      row["aip4"] = "30";
      row["aip4(N)"] = "30";
      row["aip4(H)"] = "30"; // curse chance
      row["aip5"] = "75";
      row["aip5(N)"] = "75";
      row["aip5(H)"] = "75"; // Bone Spear weight
      row["aip6"] = "15";
      row["aip6(N)"] = "15";
      row["aip6(H)"] = "15"; // Bone Spirit weight
      row["aip7"] = "10";
      row["aip7(N)"] = "10";
      row["aip7(H)"] = "10"; // Poison Nova weight
      row["aip8"] = "10";
      row["aip8(N)"] = "10";
      row["aip8(H)"] = "10"; // approach range
    }
  });

  /* ---------- skills: Raise Skeletal Mage sumskills ---------- */
  skills.rows.forEach((row) => {
    if (row.skill === "Raise Skeletal Mage") {
      const lichCalc =
        "skill('Skeleton Mastery'.lvl) + ((lvl <= 10) ? lvl : (10 + ((lvl - 10) / 2)))";

      // Active combat skills (match monstats)
      row.sumskill1 = "Bone Prison";
      row.sumsk1calc = lichCalc;
      row.sumskill2 = "Bone Spirit";
      row.sumsk2calc = lichCalc;
      row.sumskill3 = "Tooth";
      row.sumsk3calc = lichCalc;
      row.sumskill4 = "Bone Wall";
      row.sumsk4calc = lichCalc;
      row.sumskill5 = "Conviction";
      row.sumsk5calc = lichCalc;
      // If you want more synergy, extend with Teeth, Bone Wall, Bone Prison by shifting slots
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
      row.sumskill5 = "Cleansing";
      row.sumsk5calc = golemAuraCalc;
    }
    if (row.skill === "BloodGolem") {
      row.sumskill5 = "Concentration";
      row.sumsk5calc = golemAuraCalc;
    }
    if (row.skill === "IronGolem") {
      row.sumskill5 = "Vigor";
      row.sumsk5calc = golemAuraCalc;
    }
    if (row.skill === "FireGolem") {
      row.sumskill5 = "Salvation";
      row.sumsk5calc = golemAuraCalc;
    }
  });

  skills.rows.forEach((row) => {
    if (row.skill === "Golem Mastery") {
      row.Param1 *= 2; // HP % baseline (default 20)
      row.Param2 *= 2; // HP % per level (default 20)
      row.Param3 = 0; // Velocity % Min (default 0)
      row.Param4 = 40; // Velocity % Max (default 40)
      row.Param5 *= 2; // Attack Rating baseline (default 25)
      row.Param6 *= 2; // Attack Rating per level (default 25)
    }
  });
}

// Revive skill adjustments

skills.rows.forEach((row) => {
  if (row.skill === "Revive") {
    row.Param3 = 0;
    row["*calc2 desc"] = "";
    row["summon"] = "doomknight3";
  }
});

//
targets = ["andariel", "duriel", "mephisto", "diablo", "baalcrab"];
monstats2.rows.forEach((row) => {
  if (targets.includes(row["Id"])) {
    row.corpseSel = 1;
    row.revive = 1;
  }
});

// write
D2RMM.writeTsv(pettypePath, pettype);
D2RMM.writeTsv(skillsPath, skills);
D2RMM.writeTsv(statesPath, states);
D2RMM.writeTsv(monstatsPath, monstats);
D2RMM.writeTsv(monstats2Path, monstats2);
D2RMM.writeTsv(skilldescPath, skilldesc);
D2RMM.writeTsv(monaiPath, monai);
D2RMM.writeTsv(monpropPath, monprop);
