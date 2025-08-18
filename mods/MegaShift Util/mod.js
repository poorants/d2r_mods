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

const charstatsPath = "global\\excel\\charstats.txt";
const charstats = D2RMM.readTsv(charstatsPath);

const levelsPath = "global\\excel\\levels.txt";
const levels = D2RMM.readTsv(levelsPath);

// Town cast
if (config.townCast) {
  targets = [
    "Armageddon",
    "Battle Command",
    "Battle Orders",
    "Charge",
    "Hurricane",
    "Leap",
    "Shout",
    "Teleport",
    "Thunder Storm",
  ];

  skills.rows.forEach((row) => {
    if (targets.includes(row["skill"])) {
      row.InTown = 1;
    }
  });
}

// No drain stamina
if (config.noDrainStamina) {
  charstats.rows.forEach((row) => {
    row.drainstamina = 0;
  });
}

// Free skill mana
if (config.freeSkillMana) {
  skills.rows.forEach((row) => {
    row.mana = 0;
    row.lvlmana = 0;
  });

  skilldesc.rows.forEach((row) => {
    row.descmana = 0;
  });
}

// Unlock all skill
if (config.unlockAllSkill) {
  skills.rows.forEach((row) => {
    const reqSkillFields = ["reqskill", "reqskill1", "reqskill2", "reqskill3"];
    reqSkillFields.forEach((field) => {
      if (row[field] !== undefined) {
        row[field] = "";
      }
    });
    if (row.reqlevel !== undefined) {
      row.reqlevel = "1";
    }
  });
}

// Stat points
if (config.statPoints) {
  charstats.rows.forEach((row) => {
    row.statpoints = config.statPoints;
  });
}

// Skill points
if (config.skillPoints) {
  charstats.rows.forEach((row) => {
    row.skillpoints = config.skillPoints;
  });
}

// Increase pack size
if (config.increasePackSize > 1) {
  monstats.rows.forEach((row) => {
    if (row["PartyMin"]) {
      row["PartyMin"] = Math.max(
        1,
        Math.floor(row["PartyMin"] * config.increasePackSize)
      );
    }
    if (row["PartyMax"]) {
      row["PartyMax"] = Math.max(
        row["PartyMin"],
        Math.floor(row["PartyMax"] * config.increasePackSize)
      );
    }
    if (row["MinGrp"]) {
      row["MinGrp"] = Math.max(
        1,
        Math.floor(row["MinGrp"] * config.increasePackSize)
      );
    }
    if (row["MaxGrp"]) {
      row["MaxGrp"] = Math.max(
        row["MinGrp"],
        Math.floor(row["MaxGrp"] * config.increasePackSize)
      );
    }
  });
}

if (config.uniquePackMultiplier) {
  levels.rows.forEach((row) => {
    if (row["MonUMin"]) {
      row["MonUMin"] = Math.max(
        1,
        Math.floor(row["MonUMin"] * config.uniquePackMultiplier)
      );
    }
    if (row["MonUMax"]) {
      row["MonUMax"] = Math.max(
        row["MonUMin"],
        Math.floor(row["MonUMax"] * config.uniquePackMultiplier)
      );
    }
    if (row["MonUMin(N)"]) {
      row["MonUMin(N)"] = Math.max(
        1,
        Math.floor(row["MonUMin(N)"] * config.uniquePackMultiplier)
      );
    }
    if (row["MonUMax(N)"]) {
      row["MonUMax(N)"] = Math.max(
        row["MonUMin(N)"] || 1,
        Math.floor(row["MonUMax(N)"] * config.uniquePackMultiplier)
      );
    }
    if (row["MonUMin(H)"]) {
      row["MonUMin(H)"] = Math.max(
        1,
        Math.floor(row["MonUMin(H)"] * config.uniquePackMultiplier)
      );
    }
    if (row["MonUMax(H)"]) {
      row["MonUMax(H)"] = Math.max(
        row["MonUMin(H)"] || 1,
        Math.floor(row["MonUMax(H)"] * config.uniquePackMultiplier)
      );
    }
  });
}

const expMult = parseFloat(config.monExpMultiplier) || 1;

const monExpMult = parseFloat(config.monExpMultiplier) || 1;

if (monExpMult !== 1) {
  monstats.rows.forEach((row) => {
    if (row.Exp) {
      row.Exp = Math.max(1, Math.floor(parseFloat(row.Exp) * monExpMult));
    }
    if (row["Exp(N)"]) {
      row["Exp(N)"] = Math.max(
        1,
        Math.floor(parseFloat(row["Exp(N)"]) * monExpMult)
      );
    }
    if (row["Exp(H)"]) {
      row["Exp(H)"] = Math.max(
        1,
        Math.floor(parseFloat(row["Exp(H)"]) * monExpMult)
      );
    }
  });
}

// write
D2RMM.writeTsv(pettypePath, pettype);
D2RMM.writeTsv(skillsPath, skills);
D2RMM.writeTsv(statesPath, states);
D2RMM.writeTsv(monstatsPath, monstats);
D2RMM.writeTsv(skilldescPath, skilldesc);
D2RMM.writeTsv(charstatsPath, charstats);
D2RMM.writeTsv(levelsPath, levels);
