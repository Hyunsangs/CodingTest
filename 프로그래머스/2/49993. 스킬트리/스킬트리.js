function solution(skill, skill_trees) {
    
    let result = 0;
    
    skill_trees.forEach( skillTree => {
        let checkSkill = '';
        let nowSkillTree = [...skillTree];
        nowSkillTree.forEach( char => {
            if ( skill.includes(char) ) {
                checkSkill += char
            }
        })
        
        let isValid = true;
        for (let i = 0; i < checkSkill.length; i++) {
            if (checkSkill[i] !== skill[i]) {
                isValid = false;
                break;
            }
        }
        
        if (isValid) {
            result++
        }
        
        checkSkill = '';
        
    })
    
    return result;
   
    
}