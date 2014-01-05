Elm.Main = Elm.Main || {};
Elm.Main.make = function (_elm) {
   _elm.Main = _elm.Main || {};
   if (_elm.Main.values)
   return _elm.Main.values;
   var N = Elm.Native,
   _N = N.Utils.make(_elm),
   _L = N.List.make(_elm),
   _E = N.Error.make(_elm),
   _J = N.JavaScript.make(_elm),
   $moduleName = "Main";
   var Text = Elm.Text.make(_elm);
   var Text = Elm.Text.make(_elm);
   var Basics = Elm.Basics.make(_elm);
   var Signal = Elm.Signal.make(_elm);
   var List = Elm.List.make(_elm);
   var Maybe = Elm.Maybe.make(_elm);
   var Time = Elm.Time.make(_elm);
   var Prelude = Elm.Prelude.make(_elm);
   var Graphics = Graphics || {};
   Graphics.Element = Elm.Graphics.Element.make(_elm);
   var Color = Elm.Color.make(_elm);
   var Graphics = Graphics || {};
   Graphics.Collage = Elm.Graphics.Collage.make(_elm);
   var JavaScript = Elm.JavaScript.make(_elm);
   var count = Signal.constant(JavaScript.fromInt(0));
   document.addEventListener("count_" + _elm.id,
   function (_e) {
      _elm.notify(count.id,
      _e.value);
   });
   var _op = {};
   var count = Signal.constant(JavaScript.fromInt(0));
   var main = A2(Signal.lift,
   function ($) {
      return Text.plainText(Prelude.show($));
   },
   count);
   _elm.Main.values = {_op: _op
                      ,main: main};
   return _elm.Main.values;
};
