#include<iostream>
#include<climits>   
#include<algorithm>
using namespace std;
void rev(int arr[],int i,int j){
    if(i<j) swap(arr[i],arr[j]);
    i++;
    j--;
}
int main(){
    int arr[]={7,5,2,11,2,43,1,1};
    int n=sizeof(arr)/sizeof(arr[0]);
    int k=2;
    for(int i=0;i<n;i++){
        cout<<arr[i]<<" ";
    }
    cout<<endl;
    rev(arr,0,n-k-1);
    for(int i=0;i<n;i++){
        cout<<arr[i]<<" ";
    }
    cout<<endl;
    rev(arr,n-k,n-1);
    for(int i=0;i<n;i++){
        cout<<arr[i]<<" ";
    }
    cout<<endl;
    rev(arr,0,n-1);
    for(int i=0;i<n;i++){
        cout<<arr[i]<<" ";
    }
}