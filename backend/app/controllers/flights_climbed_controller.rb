class FlightsClimbedController < ApplicationController
    skip_before_action :authorized, only: [:create]

    def create
        flights_climbed = FlightsClimbed.new(flights_climbed_params)
        flights_climbed.date_time = DateTime.now
        flights_climbed.save
        if flights_climbed.valid?
            render json: {flights_climbed: FlightsClimbedSerializer.new(flights_climbed)}, status: :created
        else
            render json: { error: 'failed to create data' }, status: :not_acceptable
        end
    end

    private

    def flights_climbed_params
        params.require(:health_data).permit(:patient_id, :value)
    end
end
