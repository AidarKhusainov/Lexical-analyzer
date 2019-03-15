# Lexical-analyzer
File cube.js is the source program that we are analyzing.
File arrays.js is an array of keywords of a language.
```
Output: 

Таблица ключевых слов (10)
0       let
1       require
2       question
3       console
4       log

Таблица разделителей (20)
0       =
1       (
2       "
3       )
4       ;
5       +
6       .
7       *

Таблица идентификаторов (30)
0       readlineSync
1       lenCube
2       areaOfCubeFace
3       totalSurfaceAreaOfCube
4       volumeOfCube

Таблица констант (40)
0       readline-sync
1       Length:
2       6
3       The area of the cube face
4       The total surface area of the cube
5       The volume of the cube

Дескрипторный код
(10, 0)(30, 0)(20, 0)(10, 1)(20, 1)(20, 2)(40, 0)(20, 2)(20, 3)(20, 4)

(10, 0)(30, 1)(20, 0)(20, 5)(30, 0)(20, 6)(10, 2)(20, 1)(20, 2)(40, 1)(20, 2)(20, 3)(20, 4)

(10, 0)(30, 2)(20, 0)(30, 1)(20, 7)(30, 1)(20, 4)
(10, 0)(30, 3)(20, 0)(30, 2)(20, 7)(40, 2)(20, 4)
(10, 0)(30, 4)(20, 0)(30, 2)(20, 7)(30, 1)(20, 4)

(10, 3)(20, 6)(10, 4)(20, 1)(20, 2)(40, 3)(20, 2)(20, 5)(30, 2)(20, 3)(20, 4)
(10, 3)(20, 6)(10, 4)(20, 1)(20, 2)(40, 4)(20, 2)(20, 5)(30, 3)(20, 3)(20, 4)
(10, 3)(20, 6)(10, 4)(20, 1)(20, 2)(40, 5)(20, 2)(20, 5)(30, 4)(20, 3)(20, 4)
```
