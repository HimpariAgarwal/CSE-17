abstract class BankAccount {

    private int accountNumber;
    private String accountHolderName;
    private double balance;

    BankAccount(int accountNumber, String accountHolderName, double balance) {
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.balance = balance;
    }

    public void deposit(double amount) {
        balance += amount;
        System.out.println("Amount Deposited: " + amount);
    }

    public void displayDetails() {
        System.out.println("Account Number: " + accountNumber);
        System.out.println("Account Holder Name: " + accountHolderName);
        System.out.println("Balance: " + balance);
    }

    public double getBalance() {
        return balance;
    }

    abstract void calculateInterest();
}

class SavingsAccount extends BankAccount {

    SavingsAccount(int acc, String name, double bal) {
        super(acc, name, bal);
    }

    void calculateInterest() {
        double interest = getBalance() * 0.05;
        System.out.println("Savings Interest: " + interest);
    }
}

class CurrentAccount extends BankAccount {

    CurrentAccount(int acc, String name, double bal) {
        super(acc, name, bal);
    }

    void calculateInterest() {
        double interest = getBalance() * 0.02;
        System.out.println("Current Interest: " + interest);
    }
}

public class Exp10 {

    public static void main(String[] args) {

        SavingsAccount sa = new SavingsAccount(101, "Rahul", 10000);
        CurrentAccount ca = new CurrentAccount(102, "Anita", 20000);

        System.out.println("----- Savings Account -----");
        sa.deposit(2000);
        sa.displayDetails();
        sa.calculateInterest();

        System.out.println("\n----- Current Account -----");
        ca.deposit(3000);
        ca.displayDetails();
        ca.calculateInterest();
    }
}