function(argc, argv, g) {
    var test_list = [
        empty_loop,
        date_now,
        prop_read,
        prop_write,
        prop_create,
        prop_delete,
        array_read,
        array_write,
        array_prop_create,
        array_length_decr,
        array_hole_length_decr,
        array_push,
        array_pop,
        typed_array_read,
        typed_array_write,
        global_read,
        global_write,
        global_write_strict,
        local_destruct,
        global_destruct,
        global_destruct_strict,
        func_call,
        closure_var,
        int_arith,
        float_arith,
        set_collection_add,
        array_for,
        array_for_in,
        array_for_of,
        math_min,
        string_build1,
        string_build2,
        //string_build3,
        //string_build4,
        sort_bench,
        int_to_string,
        float_to_string,
        string_to_int,
        string_to_float,
    ];
    var tests = [];
    var i, j, n, f, name;
    
    if (typeof BigInt == "function") {
        /* BigInt test */
        test_list.push(bigint64_arith);
        test_list.push(bigint256_arith);
    }
    if (typeof BigFloat == "function") {
        /* BigFloat test */
        test_list.push(float256_arith);
    }
    
    for (i = 1; i < argc;) {
        name = argv[i++];
        if (name == "-a") {
            sort_bench.verbose = true;
            continue;
        }
        if (name == "-t") {
            name = argv[i++];
            sort_bench.array_type = g[name];
            if (typeof sort_bench.array_type != "function") {
                console.log("unknown array type: " + name);
                return 1;
            }
            continue;
        }
        if (name == "-n") {
            sort_bench.array_size = +argv[i++];
            continue;
        }
        for (j = 0; j < test_list.length; j++) {
            f = test_list[j];
            if (name === f.name) {
                tests.push(f);
                break;
            }
        }
        if (j == test_list.length) {
            console.log("unknown benchmark: " + name);
            return 1;
        }
    }
    if (tests.length == 0)
        tests = test_list;

    ref_data = load_result("microbench.txt");
    log_data = {};
    log_line.apply(null, heads);
    n = 0;

    for(i = 0; i < tests.length; i++) {
        f = tests[i];
        bench(f, f.name, ref_data, log_data);
        if (ref_data && ref_data[f.name])
            n++;
    }
    if (ref_data)
        log_line("total", "", total[2], total[3], total_score * 100 / total_scale);
    else
        log_line("total", "", total[2]);
        
    if (tests == test_list)
        save_result("microbench-new.txt", log_data);
}