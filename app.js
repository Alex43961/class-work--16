// 1) All of class below shoud have next props :
// -name ,
// -attack :  (range 1 - 100) ,
// -mana : (range 1 - 100),
// -intelligents : range (1-100)

// method :
// attack()
// firstSkill()
// secondSkill()
// ulimateAttack()

// class Warrior
// firstSkill() -> kick
// ?

// class Alchemist
// firstSkill() -> throw flask
// ?

// class Elf
// firstSkill() -> throw knife
// ?
// ulimateAttack()

// class Paladin
// firstSkill() -> heal
// ?
// ulimateAttack()

class Hero {
	constructor(name) {
		this.name = name;
	}
	attack() {
		return 10;
	}
	firstSkill() {
		return 5;
	}
	secondSkill() {
		return 4;
	}
	ultimateAttack() {
		return this.attack() * 2;
	}

}
class Warrior extends Hero {
	constructor(name) {
		super(name);
	}
	firstSkill() {
		const kick = this.attack() * 1.2;
		return kick;
	}
	secondSkill() {
		const superKick = this.attack() * 2;
		return superKick;
	}
}
class Alchemist extends Hero {
	constructor(name) {
		super(name);
	}
	firstSkill() {
		const throwFlack = this.attack() * 1.2;
		return throwFlack;
	}
	secondSkill() {
		const superFlack = this.attack() * 2;
		return superFlack;
	}
}
class Elf extends Hero {
	constructor(name) {
		super(name);
	}
	firstSkill() {
		const throwKnife = this.attack() * 1.2;
		return throwKnife;
	}
	ulitmateAttack() {
		const bigDamage = this.attack() * 10;
		return bigDamage;
	}
}
class Paladin extends Hero {
	constructor(name) {
		super(name);
	}
	firstSkill() {
		const throwKnife = this.attack() * 1.2;
		return throwKnife;
	}
	ultimateAttack() {
		const health = this.attack() * 10;
		return health;
	}
}

class HeroDB {
	character;
	constructor() {
		this.character = [
			new Warrior("Bob"),
			new Elf("John"),
			new Alchemist("Andrew"),
			new Paladin("Jack"),
		];
	}
	showUltimateAttack() {
		for (heroes of this.character) {
			if (ultimateAttack()) {
				ultimateAttack();
			}
		}
	}
}