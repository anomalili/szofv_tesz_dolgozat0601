QUnit.module("megfordit", function () {
  QUnit.test("A függvény létezik e?", function (assert) {
    assert.ok(megfordit, "létezik a megfordit?");
  });
  QUnit.test("függvény-e?!", function (assert) {
    assert.ok(typeof megfordit === "function", "függvényy a megfordit");
  });

  QUnit.test("mokus", function (assert) {
    assert.equal(megfordit("mokus", "sukom"));
  });

  QUnit.test("ab", function (assert) {
    assert.equal(megfordit("ab", "ba"));
  });

  QUnit.test("cica", function (assert) {
    assert.equal(megfordit("cica", "acic"));
  });

  QUnit.test("megszentségteleníthetetlenségeskedéseitekért", function (assert) {
    assert.equal(
      megfordit(
        "megszentségteleníthetetlenségeskedéseitekért",
        "tréketiesédeksegésneltetehtíneletgéstnezsgem"
      )
    );
  });

  
});
