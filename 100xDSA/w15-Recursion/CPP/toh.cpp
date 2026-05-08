#include <iostream>
using namespace std;

void f(int n, char src, char aux, char dest) {  //

    if (n== 0) return;
    //move the top n-1 disks to aux first
    f(n-1, src, dest, aux);
    cout << "Move from " << src << " to " << dest << endl;  //then we can move the largest disk from src to dest

    f(n-1, aux, src, dest); //then move the disks from aux to 
}

int main() {
    // Your code here
    f(3, 'A', 'B', 'C');
    return 0;
}