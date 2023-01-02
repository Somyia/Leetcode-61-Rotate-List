/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    let data=head;
    let current=head;
    let another =null;
 
   let i=0;
    while(data){
        i++
        data=data.next;
       }
            
   k%=i;
   
    while(k>0){
      while(current.next){
         another = current;
         current = current.next;
         }
       another.next = null;
       current.next = head;
       head = current ;
        k--;

      }
        
      
    return head ;
    
};
