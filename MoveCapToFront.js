const capToFront = word => {
    const caps = (word.match(/[A-Z]/g) || []).join("");
    return caps + word.toLowerCase().replace(/[A-Z]/g, "");
};

console.log(capToFront("hApPy")); // APhpy
console.log(capToFront("moveMENT")); // MENTmove
console.log(capToFront("shortCAKE")); // OCAKEshrt
//const capToFront = word => (m => m ? m[0] + word.toLowerCase().replace(/[A-Z]/g, '') : word)(word.match(/[A-Z]/));
