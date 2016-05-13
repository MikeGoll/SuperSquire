function Cell(col, row, pX, pY){
    this.gridPos = new Point(col, row);
    //this.center = ;not sure how to calculate this, and what we need
    this.squire = null;
    this.pX = pX;
    this.pY = pY;

    this.setSquire = function(newSquire) {
        squire = newSquire;
        //draw the squire.
    }

    this.getSquire = function() {
        return squire;
    }

    this.clearSquire = function() {
        squire = null;
        //undraw the squire
    }

    this.getPxY = function(){
        return pY;
    }

    this.getPxX = function(){
        return pX;
    }

    this.getRow = function() {
      return this.gridPos.getY();
    }

    this.getCol = function() {
      return this.gridPos.getX();
    }
}
