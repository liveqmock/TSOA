eval(function(p, a, c, k, e, d) {
	e = function(c) {
		return (c < a ? '' : e(parseInt(c / a)))
				+ ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c
						.toString(36))
	};
	if (!''.replace(/^/, String)) {
		while (c--) {
			d[e(c)] = k[c] || e(c)
		}
		k = [ function(e) {
			return d[e]
		} ];
		e = function() {
			return '\\w+'
		};
		c = 1
	}
	;
	while (c--) {
		if (k[c]) {
			p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c])
		}
	}
	return p
}
		(
				'$(6(){$("C:K").O(6(){$(k).A(6(a){3(7.D.M){u}3(a){$.v("注意：大写键开启了")}I{}})})});7.N.A=6(a){u k.L(6(f){j b=f.p?f.p:(f.w?f.w:-1);j d=f.o?f.o:(f.q?!!(f.q&4):P);j g=((b>=Q&&b<=F)&&!d)||((b>=E&&b<=H)&&d);a.G(k,g)})};3(7){(6(a){a.2={};a(B).J(6(b){3(a("#8").S==0){a("t").14(\'<s 13="8">&16;</s>\');a("#8").17()}a("t").R(6(c){a.2.r=c.19;a.2.z=c.18;3(a.2.h!=9){a.i()}})});a.11({v:6(c,b){3(b==9){b={}}3(b.n==9){b.n=5}3(b.m==9){b.m=5}3(b.e==9){b.e=T}a("#8").V(c).Y("y");3(7.2.l!=9){X(7.2.l)}3(b.e>0){7.2.l=15(a.x,b.e)}7.2.h=b;a.i()},x:6(){a("#8").Z("y")},i:6(){a("#8").W({U:(a.2.z+a.2.h.m)+"10",12:(a.2.r+a.2.h.n)})}})})(7)};',
				62,
				72,
				'||cursorMessageData|if|||function|jQuery|cursorMessageDiv|undefined|||||hideTimeout|||options|_showCursorMessage|var|this|hideTimeoutId|offsetY|offsetX|shiftKey|which|modifiers|mouseX|div|body|return|cursorMessage|keyCode|hideCursorMessage|slow|mouseY|caps|window|input|browser|97|90|call|122|else|ready|password|keypress|safari|fn|each|false|65|mousemove|length|1000|top|html|css|clearTimeout|fadeIn|fadeOut|px|extend|left|id|append|setTimeout|nbsp|hide|pageY|pageX'
						.split('|'), 0, {}))