//Given an integral number, determine if it's a square number.

public class Square {   
public static boolean isSquare(int n) {
		if (n < 0)
			return false;
		double a = n;
		a = (long) Math.sqrt(a);
		if (a * a == n) {
			return true;
		}
		return false;
	}
}
