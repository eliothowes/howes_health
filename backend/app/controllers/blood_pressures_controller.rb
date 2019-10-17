class BloodPressuresController < ApplicationController
    skip_before_action :authorized, only: [:create]

    def create
        byebug
        blood_pressure = BloodPressure.new(blood_pressure_params)
        blood_pressure.date_time = DateTime.now
        blood_pressure.save
        if blood_pressure.valid?
            render json: {blood_pressure: BloodPressureSerializer.new(blood_pressure)}, status: :created
        else
            render json: { error: 'failed to create data' }, status: :not_acceptable
        end
    end

    private

    def blood_pressure_params
        params.require(:health_data).permit(:patient_id, :value)
    end
end
