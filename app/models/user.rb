# frozen_string_literal: true

class User < Sequel::Model
  unrestrict_primary_key
  
  one_to_many :requests
end
