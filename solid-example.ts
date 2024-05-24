/**
 * SOLID Example
 * 
 * Single Responsability Principle - SRP
 * Open Closed Principle - OCP
 * Liskov Substitution Principle - LSP
 * Interface Segregation Principle - ISP
 * Dependency Invertion Principle - DIP
 * 
 */

interface PaymentMethod {
  getDiscountAmount: (amount: number) => number;
}

class Credit implements PaymentMethod {
  private installments;

  constructor(installments: number) {
    this.installments = installments;
  }

  getDiscountAmount (amount: number) {    
    if (this.installments === 1) {
      return amount * 0.05;
    }
    
    if (this.installments <= 6) {
      return amount * 0.02;
    }

    return 0;
  }
}

class Debit implements PaymentMethod {
  getDiscountAmount (amount: number) {
    return amount * 0.05;
  }
}

class Pix implements PaymentMethod {
  getDiscountAmount (amount: number) {
    return amount * 0.2;
  }
}

interface CalculateOrderDiscountProps {
  amount: number;
}

class CalculateOrderDiscount {
  private paymentMethod: PaymentMethod

  constructor (paymentMethod: PaymentMethod) {
    this.paymentMethod = paymentMethod;
  }

  public execute ({ amount }: CalculateOrderDiscountProps) {
    return this.paymentMethod.getDiscountAmount(amount);
  }
}

const calculateOrderDiscount = new CalculateOrderDiscount(new Credit(6));

console.log(calculateOrderDiscount.execute({ amount: 1000 }));