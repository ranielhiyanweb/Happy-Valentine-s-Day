#include <iostream>
using namespace std;

struct student{
    int id;
    string Firstname;
    string Lastname;
    string Middlename;
    int Grade;
    string Section;
};

void displayStudent(student p);

int main(){
    int list_size = 2;
    student pList[list_size];

    for(int i = 0; i < list_size; i++){
        cout << "Id: ";
        cin >> pList[i].id;
        cin.sync();
        cin.ignore();

        cout << "Firstname: ";
        getline(cin, pList[i].Firstname);


        cout << "Lastname: ";
        getline(cin, pList[i].Lastname);


        cout << "Middlename: ";
        getline(cin, pList[i].Middlename);


        cout << "Grade: ";
        cin >> pList[i].Grade;
        cin.sync();
        cin.ignore();


        cout << "Section: ";
        getline(cin, pList[i].Section);
        cout << endl;


    }


    cout << "\n\n\nStudent info... \n";
    for(int i = 0; i < list_size; i++){
        displayStudent(pList[i]);
    }


    return 0;
}

    void displayStudent(student p){
    cout << endl << "Id: " << p.id << ":" << endl;
    cout << "Firstname: " << p.Firstname << endl;
    cout << "Lastname: " << p.Lastname << endl;
    cout << "Middlename: " << p.Middlename << endl;
    cout << "Grade: " << p.Grade << endl;
    cout << "Section: " << p.Section << endl;



}
