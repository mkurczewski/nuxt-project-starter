<template>
  <div class="app">
    <section class="sudoku"></section>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    mounted () {
      class Sudoku {
        constructor (array, element) {
          this._element = element
          this._array = array
          this._fillArray(array)
          this.visualize()
        }

        _fillArray (array) {
          for (let x = 0; x < 9; x++) {
            for (let y = 0; y < 9; y++) {
              this._array[x][y] = new Point(x, y, array)
            }
          }
        }

        visualize () {
          let html = ''
          for (let x = 0; x < 9; x++) {
            html += `<div class="row">`
            for (let y = 0; y < 9; y++) {
              const value = this._array[x][y].getValue()
              html += `<div class="box">${(!!value ? value : '')}</div>`
            }
            html += `</div>`
          }
          this._element.innerHTML = html
        }

        isRowClear (x, n) {
          for (let i = 0; i < 9; i++) {
            if (this._array[x][i]._finalValue === n) {
              return false
            }
          }
          return true
        }

        isColClear (y, n) {
          for (let i = 0; i < 9; i++) {
            if (this._array[i][y]._finalValue === n) {
              return false
            }
          }
          return true
        }

        isSectionClear (x, y, n) {
          const X = Math.floor(x / 3) * 3
          const Y = Math.floor(y / 3) * 3
          for (let x = X; x < X + 3; x++) {
            for (let y = Y; y < Y + 3; y++) {
              if (this._array[x][y].getValue() === n) {
                return false
              }
            }
          }
          return true
        }

        getPossiblePlaces (x, y, n) {
          if (this.isSectionClear(x, y, n)) {
            const X = Math.floor(x / 3) * 3
            const Y = Math.floor(y / 3) * 3
            const possiblePlaces = []
            for (let x = X; x < X + 3; x++) {
              for (let y = Y; y < Y + 3; y++) {
                const value = this._array[x][y].getValue()
                if (value === null && this.isRowClear(x, n) && this.isColClear(y, n)) {
                  possiblePlaces.push({ x, y })
                }
              }
            }
            return possiblePlaces
          } else {
            return []
          }
        }

        checkPossibleValues (x, y) {
          const possibleValues = []
          if (this._array[x][y].getValue() === null) {
            for (let i = 1; i <= 9; i++) {
              if (this.isRowClear(x, i) && this.isColClear(y, i) && this.isSectionClear(x, y, i)) {
                possibleValues.push(i)
              }
            }
            return possibleValues
          } else {
            return null
          }
        }

        updatePoint (x, y, n) {
          this._array[x][y].setValue(n)
          this.visualize()
        }

        solve () {
          for (let x = 0; x < 9; x++) {
            for (let y = 0; y < 9; y++) {
              for (let n = 1; n <= 9; n++) {
                const possiblePlaces = this.getPossiblePlaces(x, y, n)
                if (this.isRowClear(x, n) && this.isColClear(y, n) && this.isSectionClear(x, y, n)) {
                  console.log(x, y, n)
                }
              }
            }
          }
        }
      }

      class Point {
        constructor (x, y, array) {
          this._x = x
          this._y = y
          this._possibleValues = []
          this._finalValue = array[x][y] === 0 ? null : array[x][y]
        }

        setValue (n) {
          this._finalValue = n
        }

        setPossibleValues (array) {
          this._possibleValues = array
        }

        getValue () {
          return this._finalValue
        }
      }

      const initialTable = [
        [0, 8, 0, 0, 3, 0, 0, 0, 0],
        [2, 0, 4, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 7, 0, 5, 0, 6, 0],
        [0, 2, 0, 0, 0, 0, 4, 0, 0],
        [9, 0, 0, 1, 0, 2, 0, 0, 8],
        [0, 0, 1, 0, 0, 0, 0, 3, 0],
        [0, 5, 0, 3, 0, 4, 0, 0, 0],
        [0, 0, 6, 0, 0, 0, 2, 0, 7],
        [0, 0, 0, 0, 6, 0, 0, 9, 0]
      ];

      (table => {
        const sudoku = new Sudoku(table, document.querySelector('.sudoku'))
        sudoku.visualize()
        sudoku.solve()
        // console.log(sudoku.isRowClear(1, 5))
        // console.log(sudoku.isColClear(1, 8))
        // console.log(sudoku.isSectionClear(3, 1, 8))
        // console.log(sudoku.getUniquePosition(5, 8, 2))
        // console.log(sudoku.checkPossibleValues(5, 8))
        // console.log(sudoku.updatePoint(5, 8, 2))

      })(initialTable)
    }
  }
</script>

<style lang="scss">
  .app {
    padding: 20px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }
  .sudoku {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    box-shadow: 0 0 0 1px #000000;
    border-top: solid 4px #000000;
    border-left: solid 4px #000000;
    justify-content: flex-start;

    .row {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      &:nth-child(3n) {
        border-bottom: solid 4px #000000;
      }
    }
    .box {
      width: 40px;
      height: 40px;
      display: flex;
      font-size: 30px;
      align-items: center;
      flex-direction: row;
      justify-content: center;
      box-shadow: 0 0 0 1px #000000;
      &:nth-child(3n) {
        border-right: solid 4px #000000;
      }
    }
  }
</style>
