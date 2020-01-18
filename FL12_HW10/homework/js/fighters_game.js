const Fighter = function(options) {
  let name = options.name;
  let damage = options.damage;
  let hp = options.hp;
  let strength = options.strength;
  let agility = options.agility;
  let totalWin = 0;
  let totalLosses = 0;
  let currentHealth = hp;


  class Fighter {
    getName() {
      return name;
    }
    getDamage() {
      return damage;
    }
    getStrength() {
      return strength;
    }
    getAgility() {
      return agility;
    }
    getHealth() {
      return currentHealth;
    }
    logCombatHistory() {
      console.log(`Name: ${name}, Wins: ${totalWin}, Losses: ${totalLosses}`);
    }
    addWin() {
      return totalWin++;
    }
    addLoss() {
      return totalLosses++;
    }
    heal(healpPoint) {
      let addHp = currentHealth + healpPoint;
      if (addHp > hp) {
        return hp;
      }
      currentHealth = addHp;
      return currentHealth;
    }
    dealDamage(damagePoint) {
      let delHp = currentHealth - damagePoint;
      if (delHp <= 0) {
         currentHealth = 0;
        return currentHealth;
      }
      currentHealth = delHp;
      return currentHealth;
    }
    attack(secondFighter) {
      const MAX_RANGE_OF_SUCCESS = 100;
      let procentOfSuccess =
        secondFighter.getAgility() + secondFighter.getStrength();
      let randomProcent =
        Math.floor(Math.random() * MAX_RANGE_OF_SUCCESS - 1) + 1;
      if (procentOfSuccess > randomProcent) {
        secondFighter.dealDamage(damage);
        console.log(`${name} makes ${damage} to ${secondFighter.getName()}`);
      } else {
        console.log(`${name} attack missed`);
      }
    }
  }

  return new Fighter();
};

const myFighter = new Fighter({
  name: 'Maximus',
  damage: 55,
  hp: 50,
  strength: 30,
  agility: 25
});

const myFighter2 = new Fighter({
  name: 'Gordeus',
  damage: 85,
  hp: 60 ,
  strength: 70,
  agility: 25
});
function buttle(fighter1, fighter2) {
  if (!fighter1.getHealth()) {
    console.log(`${fighter1.getName()} is dead and can't fight`);
    return;
  } else if (!fighter2.getHealth()) {
    console.log(`${fighter2.getName()} is dead and can't fight`);
    return;
  }

  while (fighter1.getHealth() > 0 && fighter2.getHealth() > 0) {
      
    fighter1.attack(fighter2);
    if (!fighter2.getHealth()) {
      break;
    }
    fighter2.attack(fighter1);
    if (!fighter1.getHealth() > 0) {
      break;
    }
  }
  if (fighter1.getHealth()) {
    fighter1.addWin();
    fighter2.addLoss();
    console.log(`${fighter1.getName()} has won`);
  } else {
          fighter2.addWin();
          fighter1.addLoss();
    console.log(`${fighter2.getName()} has won`);
  }
}
buttle(myFighter, myFighter2);


console.log(myFighter.logCombatHistory());

