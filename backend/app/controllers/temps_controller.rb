class TempsController < ApplicationController
    skip_before_action :authorized, only: [:create]

    def create
        temps = Temp.new(temps_params)
        temps.date_time = DateTime.now
        temps.save
        if temps.valid?
            render json: {temps: TempSerializer.new(temps)}, status: :created
        else
            render json: { error: 'failed to create data' }, status: :not_acceptable
        end
    end

    private

    def temps_params
        params.require(:health_data).permit(:patient_id, :value)
    end
end
