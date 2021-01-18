const { isPP } = require('./index')

describe('perfect powers', () => {
	test("should work for some examples",function(){
		expect(isPP(4)).toEqual([2,2]);
		expect(isPP(9)).toEqual([3,2]);
		expect(isPP(5)).toBeNull();
	});

	test("should work for the first perfect powers", function(){
		const pp = [4, 8, 9, 16, 25, 27, 32, 36, 49, 64, 81, 100, 121, 125, 128, 144, 169, 196, 216, 225, 243, 256, 289, 324, 343, 361, 400, 441, 484]

		for(let i = 0; i < pp.length; ++i){
			expect(isPP(pp[i])).not.toBeNull();
		}
	});

	test("should work for random perfect powers", function(){
		let k, m, i, r, l;
		for(i = 0; i < 100; ++i){
			m = 2 + (Math.random() * 0xff)|0;
			k = 2 + (Math.random() * Math.log(0x0fffffff) / Math.log(m))|0;
			l = Math.pow(m,k);
			r = isPP(l);
			if(r === null) {
				expect(r).not.toBeNull();
				break;
			}
		}
	});

	test("should return valid pairs for random inputs", function(){
		let i, r, l;

		for(i = 0; i < 100; ++i){
			l = (Math.random() * 0x0000ffff)|0;
			r = isPP(l);
			if(r !== null && Math.pow(r[0],r[1]) !== l){
				expect(Math.pow(r[0],r[1])).not.toBe(l)
				break;
			}
		}
	});
})