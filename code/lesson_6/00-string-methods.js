//trimStart() & substring() substr()

const standupComedian = '   nameVassilis'
console.log(standupComedian);
console.log(standupComedian.length);

standupComedianTrimmed = standupComedian.trimStart()
console.log(standupComedianTrimmed);
console.log(standupComedianTrimmed.length);

standupComedianNew = standupComedianTrimmed.substring(4)
console.log(standupComedianNew)
console.log(standupComedianNew.length);
// substr()
// no longer recommended; avoid using it & use substring() instead