## Install

```sh
yarn add gulp gulp-cli gulp-sass del -D
```

## Use

```sh
# develop watch
yarn run dev

# build
yarn run build
```

## gulpfile 文件配置

[gulpfile](./gulpfile.js)

## [Sass 官网](https://sass-lang.com/documentation/syntax)

- [@mixin](https://sass-lang.com/documentation/at-rules/mixin) 混合

  ```scss
  $radius: 3px;

  @mixin rounded {
    // 无参数
    border-radius: $radius;
  }

  .class {
    @include rounded;
  }

  // result
  // .class {
  //   border-radius: 3px;
  // }
  ```

- [@if](https://sass-lang.com/documentation/at-rules/control/if) 判断

  ```scss
  $is: true;

  .class {
    @if $is {
      width: 100px;
    }
  }

  // result
  // .class {
  //   width: 100px;
  // }
  ```

- [@for](https://sass-lang.com/documentation/at-rules/control/for) 循环

  ```scss
  $base-color: #036;

  @for $i from 1 through 3 {
    ul:nth-child(3n + #{$i}) {
      background-color: lighten($base-color, $i * 5%);
    }
  }

  // result
  // ul:nth-child(3n + 1) {
  //   background-color: #004080;
  // }

  // ul:nth-child(3n + 2) {
  //   background-color: #004d99;
  // }

  // ul:nth-child(3n + 3) {
  //   background-color: #0059b3;
  // }
  ```

- [@each](https://sass-lang.com/documentation/at-rules/control/each) 遍历 数组或 map

  ```scss
  $sizes: 40px, 50px, 80px;

  @each $size in $sizes {
    .icon-#{$size} {
      font-size: $size;
      height: $size;
      width: $size;
    }
  }

  // result
  // .icon-40px {
  //   font-size: 40px;
  //   height: 40px;
  //   width: 40px;
  // }

  // .icon-50px {
  //   font-size: 50px;
  //   height: 50px;
  //   width: 50px;
  // }

  // .icon-80px {
  //   font-size: 80px;
  //   height: 80px;
  //   width: 80px;
  // }
  ```

- [@while](https://sass-lang.com/documentation/at-rules/control/while) 循环

  ```scss
  /// Divides `$value` by `$ratio` until it's below `$base`.
  @function scale-below($value, $base, $ratio: 1.618) {
    @while $value > $base {
      $value: $value / $ratio;
    }
    @return $value;
  }

  $normal-font-size: 16px;
  sup {
    font-size: scale-below(20px, 16px);
  }

  //result
  // sup {
  //   font-size: 12.36094px;
  // }
  ```

- [@function]() 自定义函数

  ```scss
  @function pow($base, $exponent) {
    $result: 1;
    @for $_ from 1 through $exponent {
      $result: $result * $base;
    }
    @return $result;
  }

  .sidebar {
    float: left;
    margin-left: pow(4, 3) * 1px;
  }

  // result
  // .sidebar {
  //   float: left;
  //   margin-left: 64px;
  // }
  ```

- [@extend](https://sass-lang.com/documentation/at-rules/extend) 继承

  ```scss
  .error {
    border: 1px #f00;
    background-color: #fdd;

    &--serious {
      @extend .error;
      border-width: 3px;
    }
  }

  // result
  // .error, .error--serious {
  //   border: 1px #f00;
  //   background-color: #fdd;
  // }
  // .error--serious {
  //   border-width: 3px;
  // }
  ```

## [Sass 数据类型](https://sass-lang.com/documentation/values)

- [Number](https://sass-lang.com/documentation/values/numbers) 数字

  ```scss
  // 加减乘除运算等
  @debug 4px * 6px; // 24px*px (read "square pixels")
  @debug 5px / 2s; // 2.5px/s (read "pixels per second")
  @debug 5px * 30deg / 2s / 24em; // 3.125px*deg/s*em
  ```

- [String](https://sass-lang.com/documentation/values/strings) 字符串

  ```scss
  @use "sass:string";
  @debug string.unquote(".widget:hover"); // .widget:hover
  @debug string.quote(bold); // "bold"
  ```

- [Color](https://sass-lang.com/documentation/values/colors) 颜色

  ```scss
  @debug #f2ece4; // #f2ece4
  @debug #b37399aa; // rgba(179, 115, 153, 67%)
  @debug midnightblue; // #191970
  @debug rgb(204, 102, 153); // #c69
  @debug rgba(107, 113, 127, 0.8); // rgba(107, 113, 127, 0.8)
  @debug hsl(228, 7%, 86%); // #dadbdf
  @debug hsla(20, 20%, 85%, 0.7); // rgb(225, 215, 210, 0.7)
  ```

- [Boolean](https://sass-lang.com/documentation/values/booleans) 布尔

  ```scss
  @use "sass:math";

  @debug 1px == 2px; // false
  @debug 1px == 1px; // true
  @debug 10px < 3px; // false
  @debug math.comparable(100px, 3in); // true
  ```

- [null](https://sass-lang.com/documentation/values/null) null

  ```scss
  @use "sass:map";
  @use "sass:string";

  $large-map: (
    "large": 20px,
  );

  @debug string.index("Helvetica Neue", "Roboto"); // null
  @debug map.get($large-map, "small"); // null
  @debug &; // null
  ```

- [list](https://sass-lang.com/documentation/values/lists) 数组

  ```scss
  @use "sass:list";
  // list.nth($list, $index) 获取$list[$index]的值 下标从1开始
  @debug list.nth(10px 12px 16px, 2); // 12px

  // list.append($list, $value) 数组$list中追加$value
  @debug list.append(10px 12px 16px, 25px); // 10px 12px 16px 25px

  // list.index($list, $value) 获取$value 在$list中的下标  下标从1开始
  @debug list.index(1px solid red, 1px); // 1
  ```

- [maps](https://sass-lang.com/documentation/values/maps) 操作

  ```scss
  @use "sass:map";
  // map.get($map, $key) 获取$map[$key] 的值
  $font-weights: (
    "regular": 400,
    "medium": 500,
    "bold": 700,
  );
  .class {
    font-weight: map.get($font-weights, regular); // 400
  }

  // map.merge($map1, $map2) 合并map
  $light-weights: (
    "lightest": 100,
    "light": 300,
  );
  $heavy-weights: (
    "medium": 500,
    "bold": 700,
  );
  $light-and-heavy-weights: map.merge(
    $light-weights,
    $heavy-weights
  ); // ("lightest": 100, "light": 300, "medium": 500, "bold": 700 )
  ```

## [sass/theme/\_\*\*.scss](./sass/theme) 不会被编译

## [index.scss](./sass/index.scss) demo
