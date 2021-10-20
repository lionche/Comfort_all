#!/bin/bash

for i in {1..60}
do
#  echo ${i}
  python 04_coverage_calculate.py --coverage_files data/generated_data/complete_testcases/55_lines/line_$i;
done

#python 04_coverage_calculate.py --coverage_files data/generated_data/complete_testcases/55_lines/line_1