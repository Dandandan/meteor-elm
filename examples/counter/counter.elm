import JavaScript as JS

foreign import jsevent "count" (JS.fromInt 0)
    count : Signal JS.JSNumber

main = lift (plainText . show) count
