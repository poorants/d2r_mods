const skillsPath = 'global\\excel\\skills.txt';
const skills = D2RMM.readTsv(skillsPath);

if (config.reviveNoDuration) {
  const revive = skills.rows.find(r => (r.skill || '').trim() === 'Revive');
  if (revive) {
    // remove duration formula
    revive.auralencalc = '0';
  }
}

D2RMM.writeTsv(skillsPath, skills);
