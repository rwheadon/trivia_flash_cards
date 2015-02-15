//TODO : Storing data inside a controller isn't my idea of a "good idea" move it out of here when you understand AngularJS :)
(function ()
	{
		var app = angular.module('flashcards', [])
		.controller('CardController', function(){
			this.deck = deck;
			this.active_card = 0;
			this.card = this.deck[this.active_card];
			
			this.get_first_card = function(){
				this.active_card = 0;
				this.card = this.deck[this.active_card];
			}
			
			this.get_next_card = function($scope) {
				if( this.card.sequence < this.deck.length ) {
					this.active_card = this.active_card + 1;
					this.card = this.deck[this.active_card];		
				};
			};
			this.get_previous_card = function($scope) {
				if( this.active_card > 0 ) {
					this.active_card = this.active_card - 1;
					this.card = this.deck[this.active_card];
				};
			};
			
			this.fisher_yates_shuffle = function() {
				for (i=this.deck.length-1; i>0; i--) {
					var swap_pos_to_back = Math.floor( Math.random() * i );
					var swap_to_front_val = this.deck[i];
					this.deck[i] = this.deck[swap_pos_to_back];
					this.deck[swap_pos_to_back] = swap_to_front_val;
					this.active_card = 0;
				};	
			};
			
			
		});

		app.active_card = 0;
	}
)();