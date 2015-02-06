//TODO : Storing data inside a controller isn't my idea of a "good idea" move it out of here when you understand AngularJS :)
(function ()
	{
		var app = angular.module('flashcards', [])
		.controller('CardController', function(){
			this.deck = deck;
			this.active_card = 0;
			this.card = this.deck[this.active_card];
			this.get_next_card = function($scope) {
				if( this.card.sequence < this.deck.length ) {
					this.active_card = this.active_card + 1;
					this.card = this.deck[this.active_card];		
				};
			};
			this.get_previous_card = function($scope) {
				if( this.card.sequence > 1 ) {
					this.active_card = this.active_card - 1;
					this.card = this.deck[this.active_card];
				};
			};
		});

		app.active_card = 0;
	}
)();