initSidebarItems({"constant":[["PROGRESS_FREQUENCY_SECONDS",""]],"fn":[["abbreviated_format",""],["basename",""],["contains_duplicates",""],["deserialize_btreemap","Deserializes a BTreeMap from a list of tuples. Necessary when the keys are structs; see https://github.com/serde-rs/json/issues/402."],["deserialize_hashmap","Deserializes a HashMap from a list of tuples."],["deserialize_multimap","Deserializes a MultiMap."],["deserialize_usize","Deserializes a `usize` from a `u32`."],["from_binary","Deserializes an object from the bincode format."],["from_binary_reader","Deserializes an object from the bincode format, from a reader."],["from_json","Deserializes an object from a JSON string."],["from_json_reader","Deserializes an object from JSON, from a reader."],["must_run_cmd","Runs a command, asserts success. STDOUT and STDERR aren’t touched."],["parent_path",""],["plain_list_names",""],["prettyprint_bytes",""],["prettyprint_usize",""],["serialize_btreemap","Serializes a BTreeMap as a list of tuples. Necessary when the keys are structs; see https://github.com/serde-rs/json/issues/402."],["serialize_hashmap","Serializes a HashMap as a list of tuples, first sorting by the keys. This ensures the serialized form is deterministic."],["serialize_multimap","Serializes a MultiMap."],["serialize_usize","Serializes a `usize` as a `u32` to save space. Useful when you need `usize` for indexing, but the values don’t exceed 2^32."],["serialized_size_bytes","The number of bytes for an object serialized to bincode."],["setup","On native: uses env_log"],["to_binary","Transforms an object to bincoded bytes."],["to_json","Stringifies an object to nicely formatted JSON."],["to_json_terse","Stringifies an object to terse JSON."],["wraparound_get",""]],"mod":[["cli",""],["clone",""],["collections",""],["logger",""],["process",""],["serde",""],["time",""],["utils",""]],"struct":[["CmdArgs","Yet another barebones command-line flag parsing library."],["Counter",""],["FixedMap","A drop-in replacement for `BTreeMap`, where the keys have the property of being array indices. Some values may be missing. Much more efficient at operations on individual objects, because it just becomes a simple array lookup."],["MultiMap",""],["Tags","Convenience functions around a string->string map"],["VecMap","Use when your key is just PartialEq, not Ord or Hash."]],"trait":[["CloneableAny","Trick to make a cloneable Any from https://stackoverflow.com/questions/30353462/how-to-clone-a-struct-storing-a-boxed-trait-object/30353928#30353928."],["CloneableImpl",""],["IndexableKey","Use with `FixedMap`. From a particular key, extract a `usize`. These values should be roughly contiguous; the space used by the `FixedMap` will be `O(n)` with respect to the largest value returned here."]]});