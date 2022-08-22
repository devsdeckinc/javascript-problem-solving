class ParkingLot {
    slots = [];
  
    constructor(parkingSize) {
      this.slots = new Array(parkingSize).fill(null);
    }
  
    park(carId, type) {
      if (this.slots.every((slot) => slot !== null)) {
        return false;
      }
      let slotForVan = [];
      for (let i = 0; i <= this.slots.length; i++) {
        const slot = this.slots[i];
  
        if (slot === null) {
          if (type == 'van') {
            slotForVan.push(i);
            if (slotForVan.length == 3) {
              slotForVan.forEach((freeSlots) => {
                this.slots[freeSlots] = carId;
              });
              return true;
            } else {
              return false;
            }
          } else {
            this.slots[i] = carId;
            return true;
          }
        }
      }
    }
  
  
    remove(carId) {
      if (this.slots.every((slot) => slot !== carId)) {
        return false;
      }
  
      this.slots = this.slots.map((filledSlot) => {
        if (filledSlot === carId) {
          return null;
        } else {
          return filledSlot;
        }
      });
      return true;
    }
  
    getSlots() {
      return this.slots;
    }
  
    getSize() {
      return this.slots.length;
    }
  
    getAvailable() {
      const availableSlots = this.slots.filter((s) => s === null).length;
      return availableSlots;
    }
  
    isFull() {
      return this.getAvailable() === 0;
    }
  }
  
  
  let newParkingLot = new ParkingLot(5);
  
  console.log(newParkingLot.park('sam car', 'car'));
  console.log(newParkingLot.park('sam bike', 'motorcycle'));
  console.log(newParkingLot.park('sam car', 'car'));
  
  console.log(newParkingLot.getSlots());

  console.log(newParkingLot.remove('sam car'));
  console.log(newParkingLot.park('sam van', 'van'));
  console.log(newParkingLot.getAvailable());